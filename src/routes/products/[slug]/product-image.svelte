<script lang="ts">
    import type {BikeItem} from "../../../app";
    import ImageZoom from "$lib/image-zoom/image-zoom.svelte"

    export let item: BikeItem;

    let imgGallery = item.imageListPath.map((item) => `/images${item}`)

    let activeImage = imgGallery[0];

    function setActiveImage(img: string){
        activeImage=img
    }


</script>

<ImageZoom bind:src={activeImage} zoomOption={"inner"} />

<div class="flex flex-wrap justify-center">
    {#each imgGallery as image (image)}
        <div class="flex justify-center">
            <button on:click={()=> setActiveImage(image)}>
                <img src={image} alt="" height={100} width={100} class="object-cover">
            </button>
            
        </div>
    {/each}
</div>