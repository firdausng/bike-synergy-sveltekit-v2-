import {z, ZodType} from "zod";

export const validationSchema = z.object({
    type: z.string(),
    value: z.union([z.string(), z.number()]),
    message: z.string()
});

export const formDataSchema = z.object({
    type: z.string(),
    name: z.string(),
    value: z.string(),
    description: z.string(),
    label: z.string(),
    validation: z.array(validationSchema)
});

export type formDataSchema = typeof formDataSchema;

