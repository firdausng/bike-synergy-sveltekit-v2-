import {client} from "$lib/sanity/client";
import type {LayoutData} from "../app";

export async function load({params}) {
	const sanityData: LayoutData = await client.fetch(`
{
    "siteSettings": *[_type == "siteSettings"][0],
    "deliveryOptions": *[_type == "deliveryOption"][],
    "accessoryPackages": *[_type == "accessoryPackageItem"][]{
      normalPrice,
      title,
      summary,
      imagePath,
      description
    },
    "servicePackages": *[_type == "servicePackageItem"][]{
      normalPrice,
      title,
      summary,
      imagePath,
      description
    },
}
    `);

	return {
		sanityData
	};
}