<script lang="ts">
    import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import type {SiteNavigation} from "../../app";
    let {navLink}: {navLink: SiteNavigation[]} =  $props();
</script>

<div class="">
    <div id="cart">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-6 md:h-6 stroke-slate-50" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
    </div>
    <Dropdown triggeredBy="#cart" class="w-screen max-w-sm rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
        {#each navLink as link}
            <DropdownItem href={link.navPath} class="flex space-x-4 rtl:space-x-reverse" >{link.navText}</DropdownItem>
        {/each}
    </Dropdown>
</div>