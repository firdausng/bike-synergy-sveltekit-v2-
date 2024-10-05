import {z} from "zod";

export const _userMessageSchema = z.object({
    name: z.string(),
    email: z.string(),
    message: z.string()
});

export type UserMessageSchema = typeof _userMessageSchema;