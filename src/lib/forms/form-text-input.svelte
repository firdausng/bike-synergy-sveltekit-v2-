<script lang="ts">
    export let displayName: string;
    export let name: string;
    export let value: string;
</script>

<div class="flex flex-wrap gap-4 p-1 bg-gradient-to-r from-zinc-250 to-zinc-100 items-center grow rounded shadow-md shadow-slate-300/20">
    {#if displayName.length > 0}
        <label class="w-24 text-slate-600" for={name}>{displayName}</label>
    {/if}

    <input type="text" id={name} name={name} placeholder={displayName}
           bind:value={value}
           class="p-2 grow text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border" />
<!--    <ErrorMessage name={name} component={ErrorInput}  />-->
</div>