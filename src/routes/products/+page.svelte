<script lang="ts">
    import CatalogSection from "$lib/products/catalog-section.svelte"

    let {data} = $props();
</script>

<CatalogSection data={data.sanityData.allProducts}/>
