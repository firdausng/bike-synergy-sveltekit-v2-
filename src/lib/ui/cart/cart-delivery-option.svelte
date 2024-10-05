<script lang="ts">
    import type {BikeDetail} from "$lib/stores/catalog.svelte";
    import {cartDataStore} from "$lib/stores/cart.svelte";
    import type {DeliveryOption} from "../../../app";

    const {cart, index, deliveryOptions, homeDeliveryDiscount}:
        {
            cart:BikeDetail,
            index: number,
            homeDeliveryDiscount: number
            deliveryOptions:DeliveryOption[]
        } = $props()

    let homeDeliveryList: BikeDetail[] = $derived.by(() =>{
        return cartDataStore.cart.cartDetails.filter(c => c.deliveryOption === 'HOME DELIVERY');
    })

    let discountDeliveryPrice = $derived.by(() =>{
        return deliveryOptions.find(p => p.title === cart.deliveryOption);
    })

</script>


{#if (cart.deliveryOption === 'HOME DELIVERY' && homeDeliveryList.length > 1 && index > 0 && discountDeliveryPrice)}
    <p class="text-sm text-center font-semibold">
        ${parseFloat(discountDeliveryPrice.price) * homeDeliveryDiscount}</p>
{:else}
    <p class="text-sm text-center font-semibold">
        ${deliveryOptions.find(p => p.title === cart.deliveryOption)?.price}</p>
{/if}