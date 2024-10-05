<script lang="ts">
    import { page } from '$app/stores';

    let pathList: string[] = []
    let fullPathName: string[] = [];
    page.subscribe((value)=>{
        pathList =  value.url.pathname.split('/')
        fullPathName = pathList.reduce((acc: string[], subpath: string, i: number) => {
            const breadcrumbUrl = i === 0 ? subpath : acc[i - 1] + '/' + subpath;
            return [...acc, breadcrumbUrl];
        }, []);
    })


</script>

{#if pathList[1].length !== 0}
    <section class="py-[100px] pb-2 bg-[url(/images/patterns/groovepaper.png)]">
        <div class="container mx-auto">
            <div class="flex p-2 divide-x divide-solid divide-zinc-300 gap-4">
                {#each fullPathName as subpath, index (`breadcrumb_${index}`)}
                    <div class="flex gap-4 px-2">
                        {#if index + 1 !== fullPathName.length}
                            <a href="{subpath.startsWith('/') ? subpath : '/' + subpath}"
                               class="py-1 ml-2 text-sm text-zinc-500 truncate">
                                { subpath.length > 0 ? pathList[index] : 'Home' }
                            </a>
                        {:else}
                            <p class="py-1 ml-2 text-sm text-zinc-500 text-md font-semibold truncate w-32">
                                { pathList[index] }
                            </p>
                        {/if}
                    </div>
                {/each}

            </div>
        </div>
    </section>
{/if}
