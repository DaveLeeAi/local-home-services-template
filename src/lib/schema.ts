import { getServiceMeta, serviceConfig } from "@/config/service";
import { siteConfig } from "@/config/site";

export function buildOrganizationSchema() {
    const service = getServiceMeta(serviceConfig.type);

    return {
        "@context": "https://schema.org",
        "@type": service.schemaType,
        "name": siteConfig.brandName,
        "legalName": siteConfig.legalName,
        "url": siteConfig.siteUrl,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "image": `${siteConfig.siteUrl}${siteConfig.logoPath}`,
        "areaServed": siteConfig.areaServed.map((city) => ({
            "@type": "City",
            "name": city
        }))
    };
}
