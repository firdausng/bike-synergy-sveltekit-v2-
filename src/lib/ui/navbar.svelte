<script lang="ts">
    import { page } from '$app/stores';
    import CartMenuItem from "$lib/ui/cart-menu-item.svelte";
    import NavbarMenuMobile from "$lib/ui/navbar-mobile.svelte";
    import type {SiteNavigation} from "../../app";

    let {data}: {data: SiteNavigation[]} = $props();
    let pageSection = $state('')

    page.subscribe(p =>{
        pageSection = `/${p.url.hash}`;
    })

</script>

<header class="relative z-[40]">
    <nav class="h-[100px] bg-[#01414e] shadow-sm shadow-slate-800 fixed w-full">
        <div class="container mx-auto flex items-center justify-between">
            <div class="">
                <a href="/">
                    <img class="object-cover" src="/images/Saul-Bike-Synergy-Logo-all-03-Cropped.2.png" alt="Saul Britton" height=150 width=150 />
                </a>
            </div>
            <section class="grow pl-4 text-slate-300 hidden lg:block">
                <ul class="flex gap-x-8 text-md justify-end">
                    {#each data as l}
                        <li class="{pageSection === l.navPath ? 'font-bold text-white': ''} hover:underline {(pageSection === '/' || pageSection === '') && l.navText === 'HOME'  ? 'font-bold text-white': ''}">
                            <a href="{l.navPath}">{ l.navText }</a>
                        </li>
                    {/each}

                    <li>
                        <CartMenuItem />
                    </li>
                </ul>

            </section>
            <section class="grow lg:hidden">
                <div class="flex text-sm gap-4 justify-end px-4">
                    <CartMenuItem />
                    <NavbarMenuMobile navLink={data} />
                </div>
            </section>
        </div>
    </nav>

</header>