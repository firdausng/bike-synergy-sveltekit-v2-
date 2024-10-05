<script lang="ts">
    import SuperDebug, {type Infer, superForm, type SuperValidated} from "sveltekit-superforms";
    import {dev} from "$app/environment";
    import {zod} from "sveltekit-superforms/adapters";
    import {z} from "zod";
    import type {FormData} from "../../app";

    let {data} = $props();

    const groupBySection = (formDataArray: FormData[]) => {
        return formDataArray.reduce((acc, item) => {

            if (!acc[item.section]) {
                acc[item.section] = [];
            }
            acc[item.section].push(item);
            return acc;
        }, {} as Record<string, FormData[]>);
    };

    const groupedData = groupBySection(data.pageData.form);

    const {form, errors, constraints, enhance, restore} = superForm(data.form, {
        resetForm: false,
        dataType: "json",
        SPA: true,
        validators: zod(z.object(data.schema)),
        onUpdate({form}) {
            console.log(form);
            if (form.valid) {

            }
        }
    });

    errors.subscribe(e =>{
        console.log(e)
    })

</script>
<div class="p-2">
    <SuperDebug data={$form} display={dev}/>
</div>
<form method="POST" class="p-4" use:enhance>

    {#each Object.keys(groupedData) as d}
        <div class="flex flex-col gap-2 p-2 border">
            {#each groupedData[d] as f}

                <div>
                    <!--{JSON.stringify($form, null, 2)}-->
                    <!--{JSON.stringify(f, null, 2)}-->
                    <label for={$form[f.name]}>{f.label}</label>
                    {#if f.options}
                        <select name={f.name} bind:value={$form[f.name]} {...$constraints[$form[f.name]]}>
                            {#each f.options.variants as variant}
                                <option value={variant}>{variant}</option>
                            {/each}
                        </select>
                    {:else}
                        <input type="text" name={f.name} bind:value={$form[f.name]} {...$constraints[$form[f.name]]}/>
                    {/if}

                    {#if $errors[f.name]}<span class="invalid">{$errors[f.name]}</span>{/if}
                    <!--{#if $errors[$form[f.name]]}<span class="invalid">{$errors[$form[f.name]]}</span>{/if}-->
                </div>

            {/each}
        </div>
    {/each}



<!--    <label for="form.name">{f.label}</label>-->
<!--    <input type="text" name={f.name} bind:value={f.value} />-->
<!--    {#if $errors[f.name]}<span class="invalid">{$errors[f.name]}</span>{/if}-->
    <button type="submit">Submit</button>
</form>