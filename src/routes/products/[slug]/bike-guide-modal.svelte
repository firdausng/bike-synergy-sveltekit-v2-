<script>
    import {Button, Modal} from 'flowbite-svelte';
    let outsideclose = false;

    const data = [
        // {title: 'DOWNHILL', subtitle: 'Aurum HSP', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_DownhillAurumHSP_d.png'},
        // {title: 'DOWNHILL', subtitle: 'Aurum', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_DownhillAurum_d.png'},
        {title: 'ENDURO/ALL MOUNTAIN/TRAIL/XC', subtitle: 'Range, Sight, Optic, Fluid, Revolver, Torrent', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_EndroAllMtnTrailXC_d.png'},
        // {title: 'FAT BIKES', subtitle: 'Ithaqua, Bigfoot, Sasquatch', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_FatBikes_d.png'},
        // {title: 'CROSS COUNTRY', subtitle: 'Charger, Storm', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_CrossCountry_d.png'},
        // {title: 'DROP BAR', subtitle: 'Tactic, Valence, Search, Search XR, Threshold', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_DropBar_d.png'},
        // {title: 'URBAN', subtitle: 'XFR, Indie, VFR', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_Urban_d.png'},
        // {title: 'HYBRIDS', subtitle: 'Yorkville, Scene', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_Hybrids_d.png'},
        // {title: 'YOUTH BIKES', subtitle: '', path: 'https://www.sefiles.net/merchant/2127/images/site/NorcoSizeChart_Youth_d.png'},
    ]
</script>


<Button
        on:click={() => (outsideclose = true)}
        class="border-primary-800 border-2 shadow-sm shadow-primary-700"
>
    Bike Size Guide
</Button>
<div class="z-[100]">
    <Modal
            title="Bike Sizing Charts Guide"
            bind:open={outsideclose}
            size="xl"
            autoclose outsideclose
    >
        <div class="space-y-6">
            {#each data as d (d.title)}
                <div  class={'p-4 border-2 border-slate-200'}>
                            <p class="text-base leading-relaxed text-slate-800 dark:text-gray-400">
                                {d.title}
                            </p>
                            <p class="text-base leading-relaxed text-slate-500 dark:text-gray-400">
                                {d.subtitle}
                            </p>
                            <div class="">
                                <img src={d.path} alt={d.title} class="object-contain " width={1600} height={800} />
                            </div>
                </div>
                {/each}
            <!--{data.map(d => (-->
            <!--    <div key={d.title} className={'p-4 border-2 border-slate-200'}>-->
            <!--        <p className="text-base leading-relaxed text-slate-800 dark:text-gray-400">-->
            <!--            {d.title}-->
            <!--        </p>-->
            <!--        <p className="text-base leading-relaxed text-slate-500 dark:text-gray-400">-->
            <!--            {d.subtitle}-->
            <!--        </p>-->
            <!--        <div className="">-->
            <!--            <Image src={d.path} alt={d.title} className="object-contain " width={1600} height={800} />-->
            <!--        </div>-->
            <!--    </div>-->
            <!--))}-->

        </div>
        <svelte:fragment slot="footer">
            <Button>OK</Button>
        </svelte:fragment>
    </Modal>
</div>
