import {type BikeDetail} from "$lib/stores/catalog.svelte";
import { browser } from '$app/environment';
import type {BikeItem, DeliveryOption, ProductItem} from "../../app";
import {siteDataStore} from "$lib/stores/site.svelte";

export const cartDataStore = cartStore();

function cartStore(){
    const CART_NAME = "cart";

    let cartData = {
        cartDetails: []
    };

    if(browser){
        const cartStr = sessionStorage.getItem(CART_NAME);
        if (cartStr) {
            cartData = JSON.parse(cartStr);
        }
    }

    let cartDataState: CartData = $state(cartData);

    let totalPrice = $derived.by(()=>{
        const layoutData = siteDataStore.siteState.layoutData;
        return calculateAllBikesTotalPrice(
            cartDataState.cartDetails,
            layoutData?.deliveryOptions?? [],
            ((layoutData?.siteSettings.homeDeliveryDiscount)?? 1),
            layoutData?.accessoryPackages ?? [],
            layoutData?.servicePackages ?? []
        );
    });

    // let deliveryPrice = $derived.by(()=>{
    //     const layoutData = siteDataStore.siteState.layoutData;
    //     let homeDeliveryCount = 0;
    //     for (let i = 0; i < cartDataState.cartDetails.length; i++) {
    //         const deliveryOptionPackage = cartDataState.cartDetails[i].deliveryOption != undefined ? layoutData!.deliveryOptions.find(p => p.title === cartDataState.cartDetails[i].deliveryOption) : undefined;
    //         let deliveryOptionPrice = parseFloat(deliveryOptionPackage?.price!);
    //         if(cartDataState.cartDetails[i].deliveryOption === 'HOME DELIVERY'){
    //             homeDeliveryCount += 1;
    //             // home delivery half if got more than 1
    //             if(homeDeliveryCount > 1){
    //                 deliveryOptionPrice = deliveryOptionPrice * (layoutData!.siteSettings.homeDeliveryDiscount/100);
    //             }
    //
    //         }
    //     }
    //
    //     return deliveryOptionPrice;
    // })

    return {
        get cart(){return cartDataState},
        set cart(data: CartData){
            cartDataState = data
            sessionStorage.setItem(CART_NAME, JSON.stringify(cartDataState));
        },
        addCartItem(item: BikeDetail){
            cartDataState.cartDetails.push(item);
            sessionStorage.setItem(CART_NAME, JSON.stringify(cartDataState));
        },
        clearCartState(){
            cartDataState.cartDetails = [];
            sessionStorage.setItem(CART_NAME, JSON.stringify(cartDataState));
        },
        get totalPrice(){
            return totalPrice;
        }
    }
}

export type CartData ={
    cartDetails: BikeDetail[]
}

export function calculateAllBikesTotalPrice(
    catalogItems: BikeDetail[],
    deliveryOptions: DeliveryOption[],
    homeDeliveryDiscount: number,
    accessoryPackages: ProductItem[],
    servicePackages: ProductItem[]
): (number| undefined) {
    let tPrice = 0;
    let homeDeliveryCount = 0;
    if(catalogItems){
        for (let i = 0; i < catalogItems.length; i++) {

            const deliveryOptionPackage = catalogItems[i].deliveryOption != undefined ? deliveryOptions?.find(p => p.title === catalogItems[i].deliveryOption) : undefined;
            let deliveryOptionPrice = parseFloat(deliveryOptionPackage?.price!);
            if(catalogItems[i].deliveryOption === 'HOME DELIVERY'){
                homeDeliveryCount += 1;
                // home delivery half if got more than 1
                if(homeDeliveryCount > 1){
                    deliveryOptionPrice = deliveryOptionPrice * (homeDeliveryDiscount ?? 1);
                }

            }
            const price = calculateSingleBikeTotalPrice(
                catalogItems[i].item!,
                deliveryOptionPrice,
                catalogItems[i].accessoryPackage != undefined ? accessoryPackages?.find(p => p.title === catalogItems[i].accessoryPackage) : undefined,
                catalogItems[i].servicePackage != undefined ? servicePackages?.find(p => p.title === catalogItems[i].servicePackage) : undefined
            )
            tPrice += price;
        }
        return tPrice;
    }
    return undefined
}

function calculateSingleBikeTotalPrice(item: BikeItem, deliveryOptionPrice:number, accessoryPackage?: ProductItem, servicePackage?: ProductItem) {
    const accessoryPackagePrice = accessoryPackage ? parseFloat(accessoryPackage.normalPrice) : 0;
    const unlimitedServicePackagePrice = servicePackage ? parseFloat(servicePackage.normalPrice) : 0;

    const discount = item.discount?.replace(",", "");
    const normal = item.normalPrice?.replace(",", "");
    const bikePrice = item.discount ? parseFloat(discount!) : parseFloat(normal);

    //Calculate the total price with a 50% discount
    let totalAccessoryAndServicePrice = accessoryPackagePrice + unlimitedServicePackagePrice;
    if(accessoryPackagePrice !== 0 && unlimitedServicePackagePrice !== 0) {
        const discountPackagePrice = totalAccessoryAndServicePrice * 0.3;
        totalAccessoryAndServicePrice = totalAccessoryAndServicePrice - discountPackagePrice;
    }

    // console.log(totalAccessoryAndServicePrice + bikePrice + deliveryOptionPrice);
    return totalAccessoryAndServicePrice + bikePrice + deliveryOptionPrice;
}