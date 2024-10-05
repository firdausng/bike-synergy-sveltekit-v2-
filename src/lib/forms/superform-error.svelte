<script lang="ts">
    import { Alert, Li, List } from 'flowbite-svelte';

    export let error: string[] | undefined| null;
</script>
<!--{#if error}<span class="text-sm text-red-800">{error}</span>{/if}-->
{#if error}
    <div class="pt-1">
        <Alert color="red" class="!items-start">
            <p class="font-medium">Ensure that these requirements are met:</p>
            <List class="mt-1.5 ms-4">
                {#each error as err (err)}
                    <Li>{err}</Li>
                {/each}
            </List>
        </Alert>
    </div>

{/if}