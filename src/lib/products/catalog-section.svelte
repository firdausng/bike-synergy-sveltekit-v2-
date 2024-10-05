<script lang="ts">
    import BikeFilter from './bike-filter-dropdown.svelte'
    import {catalogDataStore} from "$lib/stores/catalog.svelte";
    import type {BikeItem} from "../../app";

    let {data}: {data:BikeItem[]} = $props();
    catalogDataStore.catalog = data;
</script>
<div class="container mx-auto flex flex-col items-center p-2">
    <div class=" p-2 flex justify-between w-full">
        <div class="grow">
            <p class="text-sm font-medium text-slate-500">Showing all {catalogDataStore.catalog.length} results</p>
        </div>
        <div>
            <BikeFilter />
            <!--      <PriceMenuDropdown />-->
        </div>
    </div>
    <br/>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full place-items-center md:place-items-start">
        {#each catalogDataStore.catalog as item, index (`${item.slug.current + index}`)}
            <div
                    class="group max-w-sm  border border-zinc-50 hover:border-zinc-200 rounded-lg hover:shadow">
                <div class="px-2">
                    <a href="/products/{item.slug.current}" class="m-2">
                        <div class="relative bg-local bg-cover bg-center bg-no-repeat h-64"
                             style="background-image: url(images{item.imagePath})">
                            {#if item.discount && item.discount !== '0.00'}
                            <span class="absolute top-5 left-5 bg-orange-700 text-white p-2 rounded-tr-2xl shadow-md shadow-orange-400/50">
                            SALE
                            </span>
                            {/if}

                            <span class="absolute text-center -bottom-4 left-0 bg-zinc-700 text-white p-2 rounded-t-xl shadow-md shadow-slate-400/50 w-full transition-opacity opacity-0 group-hover:opacity-100 ease-in duration-300 transform">
                            SELECT OPTIONS
                        </span>
                        </div>
                    </a>
                </div>
                <div class="p-5">
                    <a href="/products/{item.slug.current}">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">{ item.title }</h5>
                        <h6 class="mb-2 text-md tracking-tight text-gray-900">{ item.description }</h6>
                    </a>
                    {#if item.discount !== '0.00' || item.normalPrice !== '0.00'}
                        <div class="flex flex-col">
                            {#if item.discount}
                                <p class="font-semibold text-3xl text-primary-600 [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)]">{ item.discount }</p>
                            {/if}
                            {#if item.normalPrice !== '0.00' && item.normalPrice !== '0'}
                                <p class="font-semibold text-slate-700 text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)] {item.discount != null ? 'line-through font-normal text-slate-400 opacity-50 text-sm': ''}">
                                    { item.normalPrice }</p>
                            {/if}

                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>