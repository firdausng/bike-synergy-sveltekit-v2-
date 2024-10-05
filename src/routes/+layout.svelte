<script lang="ts">
    import "../app.css";
    import Navbar from '$lib/ui/navbar.svelte'
    import Footer from "$lib/ui/footer.svelte";
    import Breadcrumb from "$lib/ui/breadcrumb.svelte";
    import CartSidebar from "$lib/ui/cart/cart-sidebar.svelte";
    import {siteDataStore} from "$lib/stores/site.svelte";

    let {data, children} = $props();
    siteDataStore.siteState.layoutData = data.sanityData;

</script>

<Navbar data={data.sanityData.siteSettings.navigations}/>
<CartSidebar/>
<Breadcrumb />
{@render children()}
<Footer />