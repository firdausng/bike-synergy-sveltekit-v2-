import {catalogDataStore} from "$lib/stores/catalog.svelte";
import type {MainPageData} from "../app";
import {client} from "$lib/sanity/client";


export async function load({params}) {
    const sanityData: MainPageData = await client.fetch(`
{
  "mainPage": *[_type == "mainPage"][0] {
    hero->,
    parallax1->,
    aboutUs,
    parallax2->,
    parallax3->,
    "team": ourTeam,
    parallax4->,
    "faq": faqType,
    parallax5->,
          },
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