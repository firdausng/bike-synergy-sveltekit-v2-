<script lang="ts">

    import {onDestroy} from "svelte";
    import { fly } from 'svelte/transition';
    import {SiteDetail} from "$lib/data/data";
    import { browser } from '$app/environment'
    import type {Hero} from "../app";

    let {data}: {data:Hero} = $props();
    let carouselPhotos:string[] = [];

    const changeImageList = () => {
        // check mobile or desktop
        if(window.innerWidth > window.innerHeight){
            carouselPhotos = data.images;
        }else{
            carouselPhotos = data.mobileImages;
        }
    };

    let currentIndex = $state(0);

    let src = $derived(`/images${carouselPhotos[currentIndex]}`)

    function next() {
        currentIndex = (currentIndex+1) % carouselPhotos.length;
    }

    let timer:number;
    if (browser) {
        changeImageList();
        timer = setInterval(next, 5000);
    }

    onDestroy(() => {
        clearInterval(timer);
    });

</script>
{#if browser}
    <div class="relative h-screen">
        <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 text-center p-2">
            <h1 class="text-[75px] font-bold capitalize text-white drop-shadow-xl app-text-shadow-black">{data.title}</h1>

            <div class="bottom-divider"></div>
            <h2 class="text-[40px] font-bold capitalize text-white drop-shadow-xl app-text-shadow-black">{data.description}</h2>
            <br />
            <a href={data.callToAction_Link} class="text-[20px] md:text-[40px] font-extrabold capitalize text-white drop-shadow-xl app-text-shadow-black bg-[#01414e]/70 p-4 border shadow-emerald-950 rounded-md">
                {data.callToAction_Text}
            </a>
        </div>

        <div class="h-full w-full">
            {#key src}
                <!--https://www.reddit.com/r/sveltejs/comments/sz1yzi/image_carousel_animation_isnt_working/-->
                <!-- need to put absolute in img class, if not the effect is flickering-->
                <img
                        transition:fly="{{duration: 3000 }}"
                        {src}
                        alt={src}
                        class="absolute object-cover h-full w-full align-middle brightness-50" />
            {/key}
        </div>
    </div>
{/if}
