<script lang="ts">
    import SuperDebug, {type Infer, superForm, type SuperValidated} from "sveltekit-superforms";
    import {Select, Input} from 'flowbite-svelte';
    import {dev} from '$app/environment';
    import {zod} from "sveltekit-superforms/adapters";
    import type {BikeItem} from "../../../app";
    import {_bikeDetailSchema, type BikeDetail, type BikeDetailSchema} from "$lib/stores/catalog.svelte";
    import {cartDataStore} from "$lib/stores/cart.svelte";
    import {siteDataStore} from "$lib/stores/site.svelte";

    let {item, formData}: { item: BikeItem, formData: SuperValidated<Infer<BikeDetailSchema>> } = $props();

    const {form, errors, constraints, enhance, restore} = superForm(formData, {
        resetForm: false,
        dataType: "json",
        SPA: true,
        validators: zod(_bikeDetailSchema),
        onUpdate({form}) {
            if (form.valid) {
                let cartDetail: BikeDetail = {
                    ...form.data,
                    item,
                    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
                }
                cartDataStore.addCartItem(cartDetail);
                console.log(cartDataStore)
                siteDataStore.siteState.hideAsideCart = false;
            }
        }
    });

    // const selectedAccessoryPackage = $derived.by(() => {
    //     return item.extraPackageDetail.accessoryPackage.find(p => p.title === $form.accessoryPackage)
    // })
    //
    // const selectedServicePackage = $derived.by(() => {
    //     return item.extraPackageDetail.servicePackage.find(p => p.title === $form.servicePackage)
    // })

    // export const snapshot = { capture, restore };
</script>

<div class="p-2">
    <SuperDebug data={$form} display={dev}/>
</div>

<div class="group  border-2 border-zinc-200 bg-[#01414e]/10 relative rounded-lg">
    <form method="POST" class="p-2" use:enhance>
        <div class="p-2 border">
            <h3 class="text-lg font-semibold">Bike Info</h3>
            <div class="flex flex-col md:flex-row gap-4">
                {#if item.variants.bikeSize}
                    <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                        <label class="w-20 text-slate-600" for="bikeSize">
                            Bike Size
                        </label>
                        <Select
                                placeholder=""
                                class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                                aria-invalid={$errors.bikeSize ? 'true' : undefined}
                                bind:value={$form.bikeSize}
                                {...$constraints.bikeSize}

                        >
                            <option value="" selected>Select Bike Size</option>

                            {#each item.variants.bikeSize.map(d => ({name: d, value: d})) as {value, name}}
                                <option {value}>{name}</option>
                            {/each}
                        </Select>
                        {#if $errors.bikeSize}<span class="invalid">{$errors.bikeSize}</span>{/if}
                    </div>
                {/if}

                <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                    <label class="w-20 text-slate-600" for="helmetSize">
                        Helmet Size
                    </label>
                    <Select
                            placeholder=""
                            class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                            aria-invalid={$errors.helmetSize ? 'true' : undefined}
                            bind:value={$form.helmetSize}
                            {...$constraints.helmetSize}
                    >
                        <option value="">Select Helmet Size</option>

                        {#each item.variants.helmetSize.map(d => ({name: d, value: d})) as {value, name}}
                            <option {value}>{name}</option>
                        {/each}
                    </Select>
                    {#if $errors.helmetSize}<span class="invalid">{$errors.helmetSize}</span>{/if}
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                    <label class="w-20 text-slate-600" for="helmetColour">
                        Helmet Colour
                    </label>
                    <Select
                            placeholder=""
                            class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                            aria-invalid={$errors.helmetColour ? 'true' : undefined}
                            bind:value={$form.helmetColour}
                            {...$constraints.helmetColour}
                    >
                        <option value="">Select Helmet Colour</option>

                        {#each item.variants.helmetColour.map(d => ({name: d, value: d})) as {value, name}}
                            <option {value}>{name}</option>
                        {/each}
                    </Select>
                    {#if $errors.helmetColour}<span class="invalid">{$errors.helmetColour}</span>{/if}
                </div>
                <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                    <label class="w-20 text-slate-600" for="mXGlovesSize">
                        Glove Size
                    </label>
                    <Select
                            placeholder=""
                            class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                            aria-invalid={$errors.mXGlovesSize ? 'true' : undefined}
                            bind:value={$form.mXGlovesSize}
                            {...$constraints.mXGlovesSize}
                    >
                        <option value="">Select Glove Size</option>

                        {#each item.variants.mXGlovesSize.map(d => ({name: d, value: d})) as {value, name}}
                            <option {value}>{name}</option>
                        {/each}
                    </Select>
                    {#if $errors.mXGlovesSize}<span class="invalid">{$errors.mXGlovesSize}</span>{/if}
                </div>
            </div>

            <!-- Accessory Package -->
            <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                <label class="w-20 text-slate-600" for="accessoryPackage">
                    Accessory Package
                </label>
                <Select
                        placeholder=""
                        class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                        aria-invalid={$errors.accessoryPackage ? 'true' : undefined}
                        bind:value={$form.accessoryPackage}
                        {...$constraints.accessoryPackage}
                >
                    <option value="">Select Accessory Package</option>

                    {#each item.extraPackageDetail.accessoryPackage.map(d => ({
                        name: d.title,
                        value: d.title
                    })) as {value, name}}
                        <option {value}>{name}</option>
                    {/each}
                </Select>
                {#if $errors.accessoryPackage}<span class="invalid">{$errors.accessoryPackage}</span>{/if}
            </div>
            <div class="{selectedAccessoryPackage ? 'opacity-100 translate-y-0': 'opacity-0 -translate-y-96'} transition duration-500 ease-in-out transform text-slate-700 text-center">
                {#if selectedAccessoryPackage}
                    <p class="">$ {selectedAccessoryPackage?.normalPrice}</p>
                    {#each selectedAccessoryPackage.summary as summary (summary)}
                        <p>- {summary}</p>
                    {/each}
                {/if}
            </div>

            <!-- Service Package -->
            <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                <label class="w-20 text-slate-600" for="servicePackage">
                    Service Package
                </label>
                <Select
                        placeholder=""
                        class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                        aria-invalid={$errors.servicePackage ? 'true' : undefined}
                        bind:value={$form.servicePackage}
                        {...$constraints.servicePackage}
                >
                    <option value="">Select Service Package</option>

                    {#each item.extraPackageDetail.servicePackage.map(d => ({name: d.title, value: d.title})) as {
                        value,
                        name
                    }}
                        <option {value}>{name}</option>
                    {/each}
                </Select>
                {#if $errors.servicePackage}<span class="invalid">{$errors.servicePackage}</span>{/if}
            </div>
            <div class="{selectedServicePackage ? 'opacity-100 translate-y-0': 'opacity-0 -translate-y-96'} transition duration-500 ease-in-out transform text-slate-700 text-center">
                {#if selectedServicePackage}
                    <p class="">$ {selectedServicePackage?.normalPrice}</p>
                    {#each selectedServicePackage.summary as summary (summary)}
                        <p>- {summary}</p>
                    {/each}
                {/if}
            </div>

            <!-- Combo Package -->
            <div class="{(selectedServicePackage && selectedAccessoryPackage) ? 'opacity-100 translate-y-0': 'opacity-0 -translate-y-96'} transition duration-500 ease-in-out transform text-slate-700 text-center">
                {#if (selectedServicePackage && selectedAccessoryPackage)}
                    <p>Purchase both above as bundle and receive 30% discount = $588 &gt; save $252</p>
                {/if}
            </div>

            <!-- Delivery detail -->
            <div class="flex gap-4">
                <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                    <label class="w-20 text-slate-600" for="servicePackage">
                        Delivery Options
                    </label>
                    <Select
                            placeholder=""
                            class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                            aria-invalid={$errors.deliveryOption ? 'true' : undefined}
                            bind:value={$form.deliveryOption}
                            {...$constraints.deliveryOption}
                    >
                        <option value="">Select Delivery Option</option>

                        {#each item.deliveryOptions.map(d => ({name: d.title, value: d.title})) as {value, name}}
                            <option {value}>{name}</option>
                        {/each}
                    </Select>
                    {#if $errors.deliveryOption}<span class="invalid">{$errors.deliveryOption}</span>{/if}
                </div>
            </div>
        </div>

        <!-- Student detail -->
        <div class="p-2 border">
            <h3 class="text-lg font-semibold">Student Info</h3>
            <div class="flex gap-4">
                <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                    <label class="w-20 text-slate-600" for="fullName">
                        Student Name
                    </label>
                    <Input
                            id="fullName"
                            placeholder="Student Name"
                            type="text"
                            class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                            aria-invalid={$errors.fullName ? 'true' : undefined}
                            bind:value={$form.fullName}
                            {...$constraints.fullName}
                    />
                    {#if $errors.fullName}<span class="invalid">{$errors.fullName}</span>{/if}
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                    <label class="w-20 text-slate-600" for="height">
                        Student Height
                    </label>
                    <Input
                            id="height"
                            placeholder="Student Height"
                            type="text"
                            class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                            aria-invalid={$errors.height ? 'true' : undefined}
                            bind:value={$form.height}
                            {...$constraints.height}
                    />
                    {#if $errors.height}<span class="invalid">{$errors.height}</span>{/if}
                </div>

                <div class="flex flex-row gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
                    <label class="w-20 text-slate-600" for="weight">
                        Student Weight
                    </label>
                    <Input
                            id="weight"
                            placeholder="Student Weight"
                            type="text"
                            class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                            aria-invalid={$errors.weight ? 'true' : undefined}
                            bind:value={$form.weight}
                            {...$constraints.weight}
                    />
                    {#if $errors.weight}<span class="invalid">{$errors.weight}</span>{/if}
                </div>
            </div>
        </div>
        <div class="flex gap-4 w-1/3 p-2">
            <div class="flex gap-4">
                <button
                        class="p-2 text-zinc-200 font-semibold bg-gradient-to-r from-[#01414e] to-emerald-800 rounded w-32 shadow-lg shadow-emerald-800/50 disabled:text-zinc-400 disabled:from-slate-100 disabled:cursor-not-allowed"
                        type="submit"
                >Add to Cart
                </button>
            </div>
        </div>
    </form>
</div>
