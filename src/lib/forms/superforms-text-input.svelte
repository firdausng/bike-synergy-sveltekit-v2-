<script lang="ts">
import FormError from "$lib/forms/superform-error.svelte";
import {Input} from "flowbite-svelte";

export let errors: string[]| undefined;
export let constraints: any
export let value: string
export let placeholder: string
export let label: string

</script>

<label class="w-20 text-slate-600" for={label}>
    {label}
</label>
<Input
        {placeholder}
        type="text"
        class="p-2  text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
        aria-invalid={errors ? 'true' : undefined}
        bind:value={value}
        {...constraints}
/>
<FormError error={errors} />