import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: "https://travelone.io", lastModified: new Date() },
        { url: "https://travelone.io/about" },
        { url: "https://travelone.io/contact" },
        { url: "https://travelone.io/country" },
        { url: "https://travelone.io/tours" }
    ];
}
