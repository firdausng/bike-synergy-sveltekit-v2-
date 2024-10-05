<script lang="ts">
    import SuperDebug, {type Infer, superForm, type SuperValidated} from "sveltekit-superforms";
    import {Select, Input} from 'flowbite-svelte';
    import {dev} from '$app/environment';
    import {zod} from "sveltekit-superforms/adapters";
    import {z} from "zod";
    import type {BikeItem, FormData, FormSchema} from "../../../app";
    import { fade } from 'svelte/transition';

    let {item, formDetail}: {
        item: BikeItem,
        formDetail: {
            form: SuperValidated<{ [p: string]: any }, any, { [p: string]: any }>
            schema: FormSchema
            formData: FormData[]
        }
    } = $props();
    console.log('formDetail', formDetail);

    const groupBySection = (formDataArray: FormData[]) => {
        return formDataArray.reduce((acc, item) => {

            if (!acc[item.section]) {
                acc[item.section] = [];
            }
            acc[item.section].push(item);
            return acc;
        }, {} as Record<string, FormData[]>);
    };

    const groupedData = groupBySection(formDetail.formData);

    const {form, errors, constraints, enhance, restore} = superForm(formDetail.form, {
        resetForm: false,
        dataType: "json",
        SPA: true,
        validators: zod(z.object(formDetail.schema)),
        onUpdate({form}) {
            console.log(form);
            if (form.valid) {

            }
        }
    });

    console.log(formDetail.formData)
</script>

<div class="p-2">
    <SuperDebug data={$form} display={dev}/>
</div>

<div class="group  border-2 border-zinc-200 bg-[#01414e]/10 relative rounded-lg">
    <form method="POST" class="pb-4" use:enhance>
        <div class="p-2 border">
            {#each Object.keys(groupedData) as d}
                <h3 class="text-lg font-semibold py-2">{d}</h3>
                <div class="grid grid-cols-12 gap-4 items-center">
                {#each groupedData[d] as f}
                    <div class="col-span-{f.colSpan ? f.colSpan : '12'}">
                        <div class=" flex items-center gap-4">
                            <label class="w-20 text-slate-600" for="packages[index]">
                                {f.label}
                            </label>

                            {#if f.options}
                                <Select
                                        placeholder=""
                                        class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                                        aria-invalid={$errors[$form[f.name]] ? 'true' : undefined}
                                        bind:value={$form[f.name]}
                                        {...$constraints[$form[f.name]]}

                                >
                                    <option value="" selected>Select {f.label}</option>
                                    {#if f.options.variants}
                                        {#each f.options.variants.map(d => ({name: d, value: d})) as {value, name}}
                                            <option {value}>{name}</option>
                                        {/each}
                                    {/if}

                                    {#if f.options.packages}

                                        {#each f.options.packages.map(d => ({name: d.title, value: d.title})) as {
                                            value,
                                            name
                                        }}
                                            <option {value}>{name}</option>
                                        {/each}
                                    {/if}

                                </Select>
                            {:else}
                                <Input
                                        id={f.name}
                                        placeholder={f.label}
                                        type="text"
                                        class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                                        aria-invalid={$errors[f.name] ? 'true' : undefined}
                                        bind:value={$form[f.name]}
                                        {...$constraints[f.name]}
                                />
                            {/if}
                        </div>
                        {#if $errors[f.name]}
                            <span transition:fade={{ duration: 300 }} class="text-red-800">{$errors[f.name]}</span>
                        {/if}
                    </div>
                {/each}
                </div>
            {/each}
        </div>

        <div class="flex gap-4 w-1/3 p-2">
            <div class="flex gap-4">
                <button
                        class="p-2 text-zinc-200 font-semibold bg-gradient-to-r from-[#01414e] to-emerald-800 rounded w-32 shadow-md shadow-emerald-800/50 disabled:text-zinc-400 disabled:from-slate-100 disabled:cursor-not-allowed"
                        type="submit"
                >Add to Cart
                </button>
            </div>
        </div>
    </form>
</div>