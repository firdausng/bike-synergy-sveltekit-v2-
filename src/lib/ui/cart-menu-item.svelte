<script lang="ts">
    // import {getSiteState} from "$lib/store/site-store";
    import { Indicator, Button } from 'flowbite-svelte';
    import {cartDataStore} from "$lib/stores/cart.svelte";
    import {siteDataStore} from "$lib/stores/site.svelte";
    // import {getCartState} from "$lib/store/cart-store";

    // let siteSetting = getSiteState()
    // let cartState = getCartState();
</script>

<div on:click={()=> siteDataStore.siteState.hideAsideCart = !siteDataStore.siteState.hideAsideCart} class="relative cursor-pointer show-sidebar-button">
    <svg class="w-7 h-7 md:w-6 md:h-6 stroke-white lg:stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
    {#if cartDataStore.cart.cartDetails.length > 0}
        <Indicator color="green" border size="xl" placement="top-right">
            <span class="text-white text-xs font-bold">{cartDataStore.cart.cartDetails.length}</span>
        </Indicator>
    {/if}
</div>