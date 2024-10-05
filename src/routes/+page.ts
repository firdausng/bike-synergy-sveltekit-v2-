import {superValidate} from 'sveltekit-superforms/client';
import {zod} from 'sveltekit-superforms/adapters';
import {catalogDataStore} from "$lib/stores/catalog.svelte";
import type {MainPageData} from "../app";
import {client} from "$lib/sanity/client";
import {z} from "zod";

export const _userMessageSchema = z.object({
    name: z.string(),
    email: z.string(),
    message: z.string()
});

export type UserMessageSchema = typeof _userMessageSchema;

export async function load({params, data}) {
    const userMessageSchema = await superValidate(zod(_userMessageSchema));

    catalogDataStore.catalog = data.sanityData.allProducts;
    return {
        sanityData: data.sanityData,
        userMessageSchema,
    };
}