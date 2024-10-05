import {client} from "$lib/sanity/client";
import type {ProductPage} from "../../app";


export async function load({params}) {
    const sanityData: ProductPage = await client.fetch(`
*[_type == "productPage"][0]{
    title,
    sections,
    form[]{
      label,
      description,
      type,
      section,
      name,
      validation,
      value,
      options->{
        _type,
        title,
        variants,
        name,
        packages[]->
      }
    }
  }
    `);

    return {
        sanityData
    };
}

