import { error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/client';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from "zod";
import type {FormSchema} from "../../../app";

export async function load({ params,data }) {
    if (!data.sanityData.product) throw error(404);

    console.log(data.sanityData.productPage)

    // reference https://stackoverflow.com/questions/75984188/zod-how-to-dynamically-generate-a-schema
    const schema: FormSchema = {};
    data.sanityData.productPage.form.forEach((item) => {
        let fieldSchema = z.string()

        item.validation?.forEach((rule) => {
            switch (rule.type) {
                case 'min':
                    fieldSchema = fieldSchema.min(rule.value as number, {message: rule.message})
                    break;
                default:
                    throw new Error("Unsupported validation type")
            }
        })

        schema[item.name] = fieldSchema;
    })
    const form = await superValidate({}, zod(z.object(schema)));
    return {
        pageData: data.sanityData,
        formDetail: {
            form,
            schema,
            formData: data.sanityData.productPage.form
        },
    };
}