<script lang="ts">
    // import {Dropdown, DropdownItem, DropdownDivider, DropdownHeader, Button} from 'flowbite-svelte';
    import type {BikeItem} from "../../app";
    import {catalogDataStore} from "$lib/stores/catalog.svelte";
    import {onMount} from "svelte";

    interface SortCatalogConfig{
        name: string
        sortFn: (item1:BikeItem, item2:BikeItem) => number
    }

    const shopActions:SortCatalogConfig[] = [
        {
            name: 'Sort by price: low to high',
            sortFn: (item1:BikeItem, item2:BikeItem) => {
                let price1 = item1.normalPrice
                let price2 = item2.normalPrice
                if(item1.discount){
                    price1 = item1.discount
                }
                if(item2.discount){
                    price2 = item2.discount
                }

                return parseInt(price1.replace(',', '')) - parseInt(price2.replace(',', ''))
            }
        },
        {
            name: 'Sort by price: high to low',
            sortFn: (item1:BikeItem, item2:BikeItem) => {
                let price1 = item1.normalPrice
                let price2 = item2.normalPrice
                if(item1.discount){
                    price1 = item1.discount
                }
                if(item2.discount){
                    price2 = item2.discount
                }
                return parseInt(price2.replace(',', '')) - parseInt(price1.replace(',', ''));
            }
        },
        {
            name: 'Sort by popularity',
            sortFn: (item1:BikeItem, item2:BikeItem) => item2.count - item1.count
        },
        // assuming rating and date properties are added later
        // { name: 'Sort by average rating', sortFn: (a, b) => b.rating - a.rating },
        // { name: 'Sort by latest', sortFn: (a, b) => new Date(b.date) - new Date(a.date) },
    ];
    let dropdownOpen = false;
    const handleSort = (sortFn:(item1:BikeItem, item2:BikeItem)=> number) => {
        catalogDataStore.update(catalogDataStore.catalog.sort(sortFn))
        dropdownOpen = false
    };
    function handleFilter(action: {
        name: string, sortFn: (item1:BikeItem, item2:BikeItem)=> number
    }){
        handleSort(action.sortFn)
        title =action.name
    }

    let title = "Sort by"

    onMount(()=>{
        handleFilter(shopActions[0])
    })

</script>

<!--<Button class="bg-transparent text-primary-700 border border-primary-600/20 hover:bg-transparent">{title}</Button>-->
<!--<Dropdown bind:open={dropdownOpen}>-->
<!--    {#each shopActions as l (l)}-->
<!--        <DropdownItem>-->
<!--            <button on:click={()=> handleFilter(l)}>{l.name}</button>-->
<!--        </DropdownItem>-->
<!--    {/each}-->

<!--</Dropdown>-->