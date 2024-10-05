<script lang="ts">
    import {onMount} from "svelte";
    import type {ZoomOptions} from "$lib/image-zoom/image-zoom";

    export let zoomOption: ZoomOptions
    export let magnifyRatio = 2
    export let src: string
    export let imgText: string = "";
    export let magnifyWindowSize = 500;
    export let lenSize = 150;


    let img:HTMLImageElement;
    let windowZoomResult:HTMLElement;
    let lens:HTMLElement;
    let showZoomResult= false;

    function zoomContainer(node: HTMLElement){
        node.addEventListener("mouseenter", ()=> showZoomResult=true);
        node.addEventListener("mouseleave", ()=> showZoomResult=false);

        node.addEventListener("touchstart", ()=> showZoomResult=true);
        node.addEventListener("touchend", ()=> showZoomResult=false);
        return {
            destroy(){
                node.removeEventListener("mouseenter", ()=> showZoomResult=true);
                node.removeEventListener("mouseleave", ()=> showZoomResult=false);

                node.removeEventListener("touchstart", ()=> showZoomResult=true);
                node.removeEventListener("touchend", ()=> showZoomResult=false);
            }
        }
    }

    function imageWindowZoom() {
        let cx: number, cy: number;

        cx = windowZoomResult.offsetWidth / lens.offsetWidth;
        cy = windowZoomResult.offsetHeight / lens.offsetHeight;
        windowZoomResult.style.backgroundImage = "url('" + img.src + "')";
        windowZoomResult.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        function moveLens(e: MouseEvent| TouchEvent) {
            let pos, x, y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e as MouseEvent);
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            windowZoomResult.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
        }
    }

    function imageLensZoom() {
        lens.style.backgroundImage = "url('" + img.src + "')";
        lens.style.backgroundSize = (img.width * magnifyRatio) + "px " + (img.height * magnifyRatio) + "px";

        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);

        function moveLens(e: MouseEvent| TouchEvent) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            let pos = getCursorPos(e as MouseEvent);
            /*calculate the position of the lens:*/
            let x = pos.x - (lens.offsetWidth / 2);
            let y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            lens.style.backgroundPosition = `-${x * magnifyRatio}px -${y * magnifyRatio}px`;
        }
    }

    function imageInnerZoom() {
        let cx: number, cy: number;

        /*calculate the ratio between result DIV and lens:*/
        cx = windowZoomResult.offsetWidth / lens.offsetWidth;
        cy = windowZoomResult.offsetHeight / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        windowZoomResult.style.backgroundImage = "url('" + img.src + "')";
        windowZoomResult.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";


        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        windowZoomResult.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        windowZoomResult.addEventListener("touchmove", moveLens);

        function moveLens(e: MouseEvent| TouchEvent) {
            let pos, x, y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e as MouseEvent);
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            windowZoomResult.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
        }
    }

    function getCursorPos(e: MouseEvent) {
        let a, x = 0, y = 0;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.scrollX ;
        y = y - window.scrollY;
        return {x : x, y : y};
    }

    function imageZoom() {
        switch (zoomOption) {
            case "window":{
                imageWindowZoom();
                break;
            }
            case "lens":{
                imageLensZoom();
                break;
            }
            case "inner":{
                imageInnerZoom();
                break;
            }
            default:
                break;
        }
    }

    $: if (img) {
        img.src = src;
        imageZoom();
    }

    onMount(() => {
        imageZoom()
    })
</script>


<div use:zoomContainer
     class="{zoomOption === '' ? '': 'cursor-zoom-in'}"
     style:position={`relative`}
>
    {#if zoomOption === "lens"}
        <div bind:this={lens}
             class="border-2 border-primary-900/10 rounded-full"
             style:opacity={`${showZoomResult ? '1': '0'}`}
             style:position={`absolute`}
             style:height={`${lenSize}px`}
             style:width={`${lenSize}px`}
        ></div>
        <img bind:this={img} {src} alt={imgText} class="border-2">
    {/if}

    {#if zoomOption === "window"}
        <div bind:this={lens}
             class="border-2 border-primary-900/10 rounded-full"
             style:opacity={`${showZoomResult ? '1': '0'}`}
             style:position={`absolute`}
             style:height={`${lenSize}px`}
             style:width={`${lenSize}px`}
        ></div>
        <img bind:this={img} {src} alt={imgText} class="border-2">
        <div bind:this={windowZoomResult}
             class=" border-2 border-primary-900/10 shadow-2xl shadow-primary-800 rounded-2xl"
             style:opacity={`${showZoomResult ? '1': '0'}`}
             style:position={`absolute`}
             style:top={`${10}px`}
             style:right={`-${magnifyWindowSize + 5}px`}
             style:height={`${magnifyWindowSize}px`}
             style:width={`${magnifyWindowSize}px`}
        ></div>
    {/if}

    {#if zoomOption === "inner"}
        <div bind:this={lens}
             class=""
             style:opacity={`${showZoomResult ? '1': '0'}`}
             style:position={`absolute`}
             style:height={`${lenSize}px`}
             style:width={`${lenSize}px`}
        ></div>
        <img bind:this={img} {src} alt={imgText} class="border-2">
        <div bind:this={windowZoomResult}
             class=" border-2 border-primary-900/10 bg-contain"
             style:opacity={`${showZoomResult ? '1': '0'}`}
             style:position={`absolute`}
             style:top={`0px`}
             style:right={`-0px`}
             style:height={`100%`}
             style:width={`100%`}
             style:z-index="1"
        ></div>
    {/if}

    {#if zoomOption === ""}
        <img bind:this={img} {src} alt={imgText} class="border-2">
    {/if}
</div>
