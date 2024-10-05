<script lang="ts">
    import {cartDataStore} from "$lib/stores/cart.svelte";
    import CartComboPrice from "$lib/ui/cart/cart-combo-bike-price.svelte";
    import CartDeliveryPrice from "$lib/ui/cart/cart-delivery-option.svelte";
    import {siteDataStore} from "$lib/stores/site.svelte";

    function removeCartItem(index: number){
        let updatedCart = cartDataStore.cart.cartDetails.slice();
        updatedCart.splice(index, 1);
        cartDataStore.cart.cartDetails = [...updatedCart];
        cartDataStore.cart = cartDataStore.cart
    }

    function removeCartItemAccessoryPackage(index: number, bikePackage: string){
        cartDataStore.cart.cartDetails[index].accessoryPackage = "";
        cartDataStore.cart = cartDataStore.cart
    }

    function removeCartItemServicePackage(index: number, bikePackage: string){
        cartDataStore.cart.cartDetails[index].servicePackage = "";
        cartDataStore.cart = cartDataStore.cart
    }

</script>
<div class="divide-y divide-solid divide-zinc-300">
    {#each cartDataStore.cart.cartDetails as bike, i (bike)}
        <div class="flex flex-col gap-2 py-2">
            <div class="flex gap-4 items-center justify-between">
                {#if bike.item}
                    <a href={`/products/${bike.item?.slug.current}`}>
                        <img class="object-cover border-2 rounded-2xl"  src={`/images${bike.item?.imagePath}`} alt={bike.item?.title} width={50} height={50}/>
                    </a>
                    <div class="flex items-center gap-4">
                        <button onclick={()=> removeCartItem(i)} class="p-1 text-orange-800 font-bold rounded-full border shadow-lg  opacity-90 group-hover:opacity-100 bg-white hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                {/if}
            </div>
            <div>
                <div class="flex gap-4">
                    <h3 class="text-sm font-md text-zinc-700/90 grow">{bike.item?.title}</h3>
                    <p class="text-sm text-center font-semibold">${bike.item?.discount ? bike.item?.discount : bike.item?.normalPrice}</p>
                </div>
                {#if bike.accessoryPackage}
                    <div class="flex gap-4 items-center py-1">
                        <h3 class="text-sm font-md text-zinc-700/90 grow">{bike.accessoryPackage}</h3>
                        <button onclick={()=> removeCartItemAccessoryPackage(i, bike.accessoryPackage!)}
                           class="p-1 text-orange-800 font-bold rounded-full border shadow-lg  opacity-90 group-hover:opacity-100 bg-white hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <p class="text-sm text-center font-semibold">${siteDataStore.siteState.layoutData?.accessoryPackages.find(p => p.title === bike.accessoryPackage)?.normalPrice}</p>

                    </div>
                {/if}

                {#if bike.servicePackage}
                    <div class="flex gap-4 items-center py-1">
                        <h3 class="text-sm font-md text-zinc-700/90 grow">{bike.servicePackage}</h3>
                        <button onclick={()=> removeCartItemServicePackage(i, bike.servicePackage!)}
                                class="p-1 text-orange-800 font-bold rounded-full border shadow-lg  opacity-90 group-hover:opacity-100 bg-white hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <p class="text-sm text-center font-semibold">${siteDataStore.siteState.layoutData?.servicePackages.find(p => p.title === bike.servicePackage)?.normalPrice}</p>
                    </div>
                {/if}

                {#if (bike.servicePackage && bike.accessoryPackage)}
                    <CartComboPrice {bike} />
                {/if}

                <div class="flex gap-4 items-center py-1">
                    <h3 class="text-sm font-md text-zinc-700/90 grow">{bike.deliveryOption}</h3>
                    <CartDeliveryPrice
                            cart={bike}
                            index={i}
                            deliveryOptions={siteDataStore.siteState.layoutData!.deliveryOptions}
                            homeDeliveryDiscount={siteDataStore.siteState.layoutData!.siteSettings.homeDeliveryDiscount/100}
                    />
                </div>
            </div>
        </div>
    {/each}

    <div class="py-4 flex flex-col gap-4">
        <div class="flex justify-between font-medium text-zinc-700">
            <p>Subtotal</p>
            <p class="font-semibold">$ {cartDataStore.totalPrice}</p>
        </div>

    </div>

</div>