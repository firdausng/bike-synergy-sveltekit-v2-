<script lang="ts">
    import { Input, Label, Helper, Textarea } from 'flowbite-svelte';
    import {type Infer, superForm, type SuperValidated} from "sveltekit-superforms";
    import {_userMessageSchema, type UserMessageSchema} from "./+page";
    import {zod} from "sveltekit-superforms/adapters";
    import FormError from "$lib/forms/superform-error.svelte";

    // const { form, errors, state, handleChange, handleSubmit, isSubmitting, isValid, isModified } = createForm({
    //     initialValues: {
    //         name: "",
    //         email: "",
    //         message: ""
    //     },
    //     validationSchema: yup.object().shape({
    //         name: yup.string().required(),
    //         email: yup.string().email().required(),
    //         message: yup.string().required()
    //     }),
    //     onSubmit: values => {
    //         alert(JSON.stringify(values));
    //     }
    // });
    // let isSubmit = false;
    // isSubmitting.subscribe(val => {
    //     isSubmit = val;
    // })
    export let formData: SuperValidated<Infer<UserMessageSchema>>;


    const {form, errors, constraints, enhance} = superForm(formData, {
        resetForm: false,
        dataType: "json",
        SPA: true,
        validators: zod(_userMessageSchema),
        onUpdate({form}) {
            if (form.valid) {

            }
        }
    });
</script>

<div class="flex flex-col text-sm">
    <div class="flex flex-col">
        <div>
            <form
            method="POST" use:enhance
                    class={`flex flex-col m-2 gap-4 w-full transition-opacity duration-500 ease-out`}>
                <div class="group  border-2 border-zinc-200 bg-[#01414e]/10 relative rounded-lg w-full">
                    <div class="p-2 border flex flex-col gap-2">
                        <div class="flex flex-col md:flex-row gap-4 p-1 items-center">
                            <label class="w-24" for="name">Your Name</label>
                            <Input
                                    id="name"
                                    placeholder="Name"
                                    type="text"
                                    class="p-2 text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                                    aria-invalid={$errors.name ? 'true' : undefined}
                                    bind:value={$form.name}
                                    {...$constraints.name}
                            />
                            <FormError error={$errors.name} />
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 p-1 items-center">
                            <label class="w-24" for="email">Your Email</label>
                            <Input
                                    id="email"
                                    placeholder="email"
                                    type="email"
                                    class="p-2 text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border overflow-x-scroll"
                                    aria-invalid={$errors.email ? 'true' : undefined}
                                    bind:value={$form.email}
                                    {...$constraints.email}
                            />
                            <FormError error={$errors.email} />
                        </div>
                        <div class="flex gap-4 w-full">
                            <Textarea
                                    placeholder="Get in Touch. We would like to hear from you!"
                                    class="p-2 grow text-slate-700 placeholder:italic placeholder:text-slate-400 bg-zinc-50 rounded border"
                                    aria-invalid={$errors.message ? 'true' : undefined}
                                    bind:value={$form.message}
                                    rows="4"
                                    {...$constraints.message}
                            />
                            <FormError error={$errors.message} />
                        </div>
                        <div class="flex gap-4 w-1/3 p-2">
                            <div class="flex gap-4">
                                <button
                                        class="inline-flex items-center p-2 text-zinc-200 font-semibold bg-gradient-to-r from-[#01414e] to-emerald-800 rounded w-48 shadow-md shadow-[#01414e]/50 disabled:text-zinc-400 disabled:from-slate-100 disabled:cursor-not-allowed"
                                        type="submit"
                                >
<!--                                    <svg class={`stroke-emerald-950 animate-spin -ml-1 mr-3 h-5 w-5 text-white ${isSubmit ? 'opacity-100': 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">-->
<!--                                        <circle class="stroke-emerald-950 opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>-->
<!--                                        <path class="stroke-emerald-950 opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>-->
<!--                                    </svg>-->
                                    Submit Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>