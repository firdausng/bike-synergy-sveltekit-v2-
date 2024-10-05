import {client} from "$lib/sanity/client";
import type {ProductDetailPageData} from "../../../app";


export async function load({params}) {
    const sanityData: ProductDetailPageData = await client.fetch(`
{
  "siteSettings": *[_type == "siteSettings"][0],
  "product": *[_type == "product" && slug.current == $slug][0] {
    title,
    description,
    cta,
    summary,
    normalPrice,
    discount,
    imagePath,
    imageListPath,
    slug,
    variants{
      title,
      variant[]->
    },
    deliveryOptions[]->,
    extraPackageDetail{
      packages[]->{
         name,
        packages[]->
      }
    }
  },
  "productPage": *[_type == "productPage"][0]{
    title,
    sections,
    form[]{
      label,
      description,
      type,
      section,
      name,
      validation,
      dependOn,
      colSpan,
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
}
    `, {
        slug: params.slug
    });

    return {
        sanityData
    };
}