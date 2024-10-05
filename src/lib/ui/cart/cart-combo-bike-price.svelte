<script lang="ts">
    import {accessoryPackageList, servicePackageList, STORE_DISCOUNT} from "$lib/data/data";
    import type {BikeDetail} from "$lib/stores/catalog.svelte";

    export let bike:BikeDetail
    const discountPercent =STORE_DISCOUNT.COMBO_PACKAGE_DISCOUNT
    const servicePackagePrice = parseInt(servicePackageList.find(p => p.title === bike.servicePackage)!.normalPrice) ;
    const accessoryPackagePrice = parseInt(accessoryPackageList.find(p => p.title === bike.accessoryPackage)!.normalPrice);
    const discount = (servicePackagePrice + accessoryPackagePrice) * discountPercent
</script>

<div class="flex gap-4">
    <h3 class="text-sm font-md text-zinc-700/90 grow">{discountPercent * 100}% discount</h3>
    <p class="text-sm text-center font-semibold">
        - ${discount}
    </p>
</div>