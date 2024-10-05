export async function GET() {
    return new Response(
        `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
	  <url>
        <loc>https://bikesynergy.com/</loc>
      </url><url>
        <loc>https://bikesynergy.com/products</loc>
      </url><url>
        <loc>https://bikesynergy.com/products/OPTION-1-MERIDA-BIG9-HARDTAIL-BIKE</loc>
      </url><url>
        <loc>https://bikesynergy.com/products/OPTION-2-Norco-Fluid-DUAL-SUSPENSION-BIKE-BLACK-2023-BIKE-OF-THE-YEAR</loc>
      </url><url>
        <loc>https://bikesynergy.com/products/OPTION-2-Norco-Fluid-DUAL-SUSPENSION-BIKE-RED-2023-BIKE-OF-THE-YEAR</loc>
      </url><url>
        <loc>https://bikesynergy.com/products/Accessory-and-Service-Package</loc>
      </url>
		</urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}