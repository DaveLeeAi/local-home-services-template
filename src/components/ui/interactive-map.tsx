"use client";

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

export default function InteractiveMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null); // Use any to avoid strict type issues with dynamic import logic

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (mapInstance.current) return;

        // Dynamic import to ensure client-side execution
        import('leaflet').then((L) => {
            if (!mapContainer.current) return;

            // Fix for default marker icons missing in Leaflet + Webpack/Next.js
            // We'll skip markers for now or use a simple circleMarker to avoid asset 404s

            const map = L.map(mapContainer.current).setView([33.85, -84.38], 9);
            mapInstance.current = map;

            // Use a clean, light basemap that fits the professional theme
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 19
            }).addTo(map);

            // Service Area Polygon (Expanded Greater Metro Atlanta)
            // Service Area Polygon (Expanded Greater Metro Atlanta)
            const servicePolygon = [
                [34.25, -84.60], // NW (Cartersville/Acworth)
                [34.25, -84.10], // NE (Cumming/Buford)
                [34.00, -83.75], // East (Dacula/Winder)
                [33.60, -83.80], // SE (Covington/Oxford)
                [33.30, -84.10], // South (McDonough/Locust Grove)
                [33.30, -84.85], // SW (Newnan/Sharpsburg)
                [33.60, -84.95], // West (Villa Rica/Carrollton)
                [34.00, -84.80], // West (Dallas/Marietta)
            ] as [number, number][];

            const polygon = L.polygon(servicePolygon, {
                color: '#15803d', // green-700
                fillColor: '#22c55e', // green-500
                fillOpacity: 0.12,
                weight: 2,
                dashArray: '5, 10',
                interactive: false // Prevent polygon from capturing clicks intended for markers
            }).addTo(map);

            // Removed generic polygon popup to prevent confusing click behavior
            // polygon.bindPopup("<b>Peachtree Outdoor Living</b><br>Serving the Greater Metro Atlanta Area");

            // Add interactive circle markers for ALL key cities in the service area
            const cities = [
                // North Metro
                { name: "Alpharetta", coords: [34.0754, -84.2941] },
                { name: "Roswell", coords: [34.0232, -84.3616] },
                { name: "Milton", coords: [34.1323, -84.3228] }, // Added
                { name: "Johns Creek", coords: [34.0289, -84.1986] }, // Added
                { name: "Sandy Springs", coords: [33.9304, -84.3733] },
                { name: "Dunwoody", coords: [33.9462, -84.3346] }, // Added
                { name: "Cumming", coords: [34.2073, -84.1402] },
                { name: "Suwanee", coords: [34.0520, -84.0713] }, // Added
                { name: "Buford", coords: [34.1207, -84.0044] }, // Added (NE)
                { name: "Sugar Hill", coords: [34.1067, -84.0335] }, // Added (NE)
                { name: "Duluth", coords: [34.0029, -84.1446] }, // Added (NE)
                { name: "Peachtree Corners", coords: [33.9696, -84.2216] }, // Added (NE)
                { name: "Norcross", coords: [33.9412, -84.2135] }, // Added (NE)
                { name: "Dacula", coords: [33.9887, -83.8979] }, // Added (NE)

                // Northwest (Cherokee)
                { name: "Woodstock", coords: [34.1013, -84.5194] }, // Added (NW)
                { name: "Canton", coords: [34.2368, -84.4906] }, // Added (NW)
                { name: "Holly Springs", coords: [34.1714, -84.5020] }, // Added (NW)
                { name: "Ball Ground", coords: [34.3379, -84.3768] }, // Added (NW - Far North)

                // Cobb & West
                { name: "Marietta", coords: [33.9526, -84.5499] },
                { name: "Smyrna", coords: [33.8840, -84.5144] },
                { name: "Kennesaw", coords: [34.0234, -84.6155] }, // Added
                { name: "Acworth", coords: [34.0659, -84.6769] }, // Added
                { name: "Powder Springs", coords: [33.8595, -84.6838] }, // Added
                { name: "Mableton", coords: [33.8187, -84.5824] }, // Added
                { name: "Vinings", coords: [33.8687, -84.4621] }, // Added
                { name: "Dallas", coords: [33.9237, -84.8408] }, // Added (West expansion)
                { name: "Villa Rica", coords: [33.7321, -84.9191] }, // Added (West expansion)

                // Dekalb & East
                { name: "Decatur", coords: [33.7748, -84.2963] },
                { name: "Tucker", coords: [33.8545, -84.2171] }, // Added
                { name: "Stone Mountain", coords: [33.8080, -84.1702] },
                { name: "Snellville", coords: [33.8573, -84.0147] }, // Added
                { name: "Loganville", coords: [33.8390, -83.9049] }, // Requested
                { name: "Lilburn", coords: [33.8901, -84.1430] }, // Added
                { name: "Conyers", coords: [33.6676, -84.0177] }, // Requested
                { name: "Chamblee", coords: [33.8920, -84.2988] }, // Added
                { name: "Brookhaven", coords: [33.8651, -84.3366] }, // Added
                { name: "Lawrenceville", coords: [33.9562, -83.9880] },
                { name: "Covington", coords: [33.5960, -83.8602] }, // Requested

                // South Metro & South Fulton
                { name: "Douglasville", coords: [33.7515, -84.7477] }, // Added
                { name: "South Fulton", coords: [33.5901, -84.6606] }, // Added
                { name: "Union City", coords: [33.5790, -84.5438] }, // Added
                { name: "Fairburn", coords: [33.5671, -84.5810] }, // Added
                { name: "Peachtree City", coords: [33.3969, -84.5963] },
                { name: "Fayetteville", coords: [33.4486, -84.4559] }, // Added
                { name: "Newnan", coords: [33.3807, -84.7997] },
                { name: "Forest Park", coords: [33.6212, -84.3699] }, // Added
                { name: "Riverdale", coords: [33.5726, -84.4130] }, // Added
                { name: "Jonesboro", coords: [33.5215, -84.3538] }, // Added
                { name: "Stockbridge", coords: [33.5443, -84.2338] }, // Added
                { name: "McDonough", coords: [33.4473, -84.1469] }, // Added

                // Intown (Grouped)
                { name: "Atlanta (Intown)", coords: [33.7490, -84.3880] }, // Buckhead/Midtown
                { name: "Buckhead", coords: [33.8373, -84.3819] }, // Added specific for prestige
                { name: "East Point", coords: [33.6754, -84.4410] }, // Added (South/Central)
                { name: "College Park", coords: [33.6534, -84.4494] }, // Added (South/Central)
                { name: "Hapeville", coords: [33.6601, -84.4102] }, // Added (South/Central)
                { name: "Avondale Estates", coords: [33.7723, -84.2669] }, // Added (Central/East)
            ];

            cities.forEach(city => {
                L.circleMarker(city.coords as [number, number], {
                    radius: 7, // Increased size for easier clicking
                    fillColor: "#15803d",
                    color: "#fff",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.9
                })
                    .addTo(map)
                    .bindTooltip(city.name, { permanent: false, direction: 'top' }) // Hover label
                    .bindPopup(`<b>${city.name}</b><br>Service Available in ${city.name}`); // Click popup
            });
        });

        // Cleanup
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    return <div ref={mapContainer} className="h-full w-full min-h-[400px] bg-slate-100" style={{ zIndex: 0 }} />;
}
