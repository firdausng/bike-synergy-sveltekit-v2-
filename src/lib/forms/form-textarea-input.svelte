<script lang="ts">
    export let displayName: string = "";
    export let name: string;
    export let placeHolder: string;

    export let value: string;
</script>

<div class="flex flex-col gap-4 w-full p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
    {#if displayName.length > 0}
        <label class="w-24 text-slate-600" for={name}>{displayName}</label>
    {/if}

    <textarea id={name} name={name} placeholder={placeHolder}
              bind:value={value}
           class="p-2 h-24 w-full text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border" />
<!--    <ErrorMessage name={name} component={ErrorInput}  />-->
</div>