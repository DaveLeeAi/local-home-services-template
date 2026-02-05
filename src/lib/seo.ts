import type { Metadata } from "next";
import { getServiceMeta, serviceConfig } from "@/config/service";
import { siteConfig } from "@/config/site";

export function getBaseUrl(): URL {
    return new URL(siteConfig.siteUrl);
}

export function getDefaultTitle(): string {
    const service = getServiceMeta(serviceConfig.type);
    return `${service.label} in Metro Atlanta | ${siteConfig.brandName}`;
}

export function getDefaultDescription(): string {
    const service = getServiceMeta(serviceConfig.type);
    return `Professional ${service.label.toLowerCase()} services in Metro Atlanta. Trusted, licensed, and reliable. Contact ${siteConfig.brandName} for a free consultation.`;
}

export function buildRootMetadata(): Metadata {
    const service = getServiceMeta(serviceConfig.type);
    const title = getDefaultTitle();
    const description = getDefaultDescription();

    return {
        metadataBase: getBaseUrl(),
        title: {
            default: title,
            template: `%s | ${siteConfig.brandName}`,
        },
        description: description,
        alternates: {
            canonical: siteConfig.siteUrl,
        },
        openGraph: {
            title: title,
            description: description,
            url: siteConfig.siteUrl,
            siteName: siteConfig.brandName,
            images: [
                {
                    url: siteConfig.logoPath,
                    width: 800,
                    height: 600,
                    alt: `${siteConfig.brandName} Logo`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [siteConfig.logoPath],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}
