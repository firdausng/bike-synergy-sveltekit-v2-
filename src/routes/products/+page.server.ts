import {catalogDataStore} from "$lib/stores/catalog.svelte";
import {client} from "$lib/sanity/client";
import type {MainPageData} from "../../app";


export async function load({params}) {
    const sanityData: MainPageData = await client.fetch(`
{
  "siteSettings": *[_type == "siteSettings"][0],
  "allProducts": *[_type == "product"] {
    title,
    description,
    summary,
    normalPrice,
    discount,
    imagePath,
    slug,
    variants,
    extraPackageDetail{
      accessoryPackage[]->,
      servicePackage[]->
    }
  }
}
    `);
    catalogDataStore.catalog = sanityData.allProducts;
    return {
        sanityData
    };
}