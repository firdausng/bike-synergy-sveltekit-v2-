<script lang="ts">
    import {siteDataStore} from "$lib/stores/site.svelte.js";
    import { goto } from '$app/navigation';
    import { Drawer, Button, CloseButton } from 'flowbite-svelte';
    import {sineIn} from "svelte/easing";
    import {cartDataStore} from "$lib/stores/cart.svelte";
    import CartListing from "$lib/ui/cart/cart-listing.svelte";

    // let {children}: {children:any} = $props();

    let activateClickOutside = false;
    let backdrop = false;
    let transitionParamsRight = {
        x: 320,
        duration: 200,
        easing: sineIn
    };

    function handleClick(){
        goto('/order')
        siteDataStore.siteState.hideAsideCart = true
    }

</script>

<!--<aside  class={`fixed z-[90] right-0 mt-[100px] py-4 px-8 w-96 h-full shadow-lg border transition duration-500 ease-in-out transform ${!siteDataStore.value.hideAsideCart ? 'translate-x-0': 'translate-x-96'} bg-[url(/images/patterns/groovepaper.png)] bg-fixed`}>-->
<!--    <h2 class="text-center font-semibold p-2">Your Cart</h2>-->
<!--    &lt;!&ndash;{children}&ndash;&gt;-->
<!--    {@render children()}-->

<!--    <div class="text-sm py-4 text-white">-->
<!--        <button onclick={handleClick}  class="bg-gradient-to-r from-[#01414e] to-emerald-800 p-3 rounded-lg shadow-md shadow-emerald-900/50">Review Payment and Address</button>-->
<!--    </div>-->
<!--</aside>-->

<Drawer
        placement="right"
        {activateClickOutside}
        {backdrop}
        transitionType="fly"
        transitionParams={transitionParamsRight}
        bind:hidden={siteDataStore.siteState.hideAsideCart}
        divClass="z-50 bg-[url(/images/patterns/groovepaper.png)] p-2 pl-4 shadow-lg"
>
    <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 ">
            <!--            <InfoCircleSolid class="w-4 h-4 me-2.5" />Info-->
        </h5>
        <CloseButton on:click={() => (siteDataStore.siteState.hideAsideCart = true)} class="mb-4 dark:text-white" />
    </div>
    <h2 class="text-center font-semibold p-2">Your Cart</h2>
    {#if cartDataStore.cart.cartDetails.length > 0}
        <CartListing />
        <div class="text-sm py-4 text-white">
            <button on:click={handleClick}
                    class="bg-gradient-to-r from-[#01414e] to-emerald-800 p-3 rounded-lg shadow-md shadow-emerald-900/50">
                Review Payment and Address</button>
        </div>
    {/if}
</Drawer>