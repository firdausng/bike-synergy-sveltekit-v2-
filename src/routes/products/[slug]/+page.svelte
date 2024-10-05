<script lang="ts">
    import ProductImage from './product-image.svelte'
    import GloveModal from './glove-modal.svelte'
    import HelmetModal from './helmet-modal.svelte'
    import BikeGuideModal from './bike-guide-modal.svelte'
    // import ProductForm from './product-form.svelte'
    import ProductForm from './product-form-v2.svelte'

    let {data} = $props();

    let item = data.pageData.product
</script>


<main class="h-full ">
    <section class="container mx-auto flex flex-col w-full">
        <div class="flex flex-col md:flex-row items-center">
            <div class="px-2 md:w-3/6">
                <ProductImage {item}/>
            </div>
            <div class="px-5 flex-1  border border-slate-200 rounded bg-[#01414e]/10">
                <div class="pb-2">
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">{ item.title }</h5>
                    <div class="flex flex-col mb-2">
                        {#if (item.discount && item.discount !== '0.00')}
                            <p class="font-semibold text-3xl text-primary-600 [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)]">
                                ${ item.discount }</p>
                        {/if}
                        {#if item.normalPrice !== '0.00' && item.normalPrice !== '0'}
                            <p class="font-semibold text-slate-700 {item.discount != null ? 'line-through font-normal text-slate-400 opacity-50 text-sm': ''}">
                                ${ item.normalPrice }</p>
                        {/if}
                    </div>
                </div>

                <!--        product summary-->
                <div>
                    {item.description}
                </div>
                <ul class="p-2">
                    {#each item.summary as s (s)}
                        <li class="flex  gap-2 group py-2">
                            <svg class="w-6 h-6 pt-1 stroke-[#01414e] group-hover:stroke-cyan-700"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke-width=2 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>

                            <p class="text-sm font-sans flex-1">{ s }</p>
                        </li>
                    {/each}

                </ul>

                <!-- Packages -->
                <h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900">Packages</h3>
                {#each item.extraPackageDetail.packages as p (p.name)}
                    <div class="m-2 ml-4 p-2 border border-[#01414e]/20 shadow hover:border-[#01414e] hover:border-2">
                        <h4 class="text-md font-bold tracking-tight text-gray-900">{p.name}</h4>
                        <div class="ml-4 p-2">
                            {#each p.packages as pi (pi.title)}
                                <div>
                                    <h4 class="mb-2 text-md font-bold tracking-tight text-gray-900">{ pi.title }</h4>
                                    <div class="flex gap-2 justify-between">
                                        <div>
                                            {#each pi.summary as d (d)}
                                                <p class="text-sm font-sans">- { d }</p>
                                            {/each}
                                        </div>
                                        <p class="font-semibold text-red-800">$ { pi.normalPrice }</p>
                                    </div>
                                </div>
                            {/each}

                        </div>
                    </div>
                {/each}

                <!--        combo package-->
                <div class="p-2">
                    <h4 class="mb-2 text-lg font-bold tracking-tight text-red-800">{data.pageData.product.cta}</h4>
                    <div class="flex gap-2 justify-between">
                        <p class="text-sm font-sans"></p>
                    </div>
                </div>

                <!--        delivery option-->
                <div class="p-2">
                    <h1 class="mb-2 text-lg font-bold tracking-tight text-gray-900">Delivery Options</h1>
                    {#each data.pageData.product.deliveryOptions as p (p.title)}
                        <div class="px-4 mb-2 ">
                            <div>
                                <h4 class="text-lg font-bold tracking-tight text-gray-900">{ p.title }</h4>
                            </div>
                            <div class="flex gap-2 justify-between">
                                <ul class="list-disc ">
                                    {#each p.summary as d (d)}
                                        <li>
                                            <p class="text-sm font-sans">{ d }</p>
                                        </li>
                                    {/each}
                                </ul>
                                <div class="flex gap-1">
                                    <p class="font-semibold text-red-800">$</p>
                                    <p class="font-semibold text-red-800">{ p.price }</p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>

                <!--          sizing-->
                <div class="flex sm:flex-col md:flex-row gap-2 py-8 m-2">
                    <GloveModal/>
                    <HelmetModal/>
                    <BikeGuideModal/>
                </div>

            </div>
        </div>
        <div class="pb-24">
            <!--            <ProductForm bind:formData={data.form} bind:item />-->
                        <ProductForm item={item} formDetail={data.formDetail} />
        </div>
    </section>
</main>

