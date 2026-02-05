export interface ServiceMeta {
    label: string;
    schemaType: string;
    licenseRequired: boolean;
    regulated: boolean;
    primaryCategory: "home_service" | "insurance";
}

export const SERVICE_REGISTRY = {
    // --- CORE TRADES ---
    "roofing": { label: "Roofing", schemaType: "RoofingContractor", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "hvac": { label: "HVAC", schemaType: "HVACBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "plumbing": { label: "Plumbing", schemaType: "Plumber", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "electrical": { label: "Electrical", schemaType: "Electrician", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "pest-control": { label: "Pest Control", schemaType: "PestControl", licenseRequired: true, regulated: true, primaryCategory: "home_service" },

    // --- EXTERIOR ---
    "deck": { label: "Deck Building", schemaType: "GeneralContractor", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "siding": { label: "Siding", schemaType: "GeneralContractor", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "gutters": { label: "Gutters", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "windows": { label: "Window Installation", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "doors": { label: "Door Installation", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "fencing": { label: "Fencing", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "garage-doors": { label: "Garage Doors", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "landscaping": { label: "Landscaping", schemaType: "GardenStore", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "tree-service": { label: "Tree Service", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "pool-cleaning": { label: "Pool Cleaning", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "pressure-washing": { label: "Pressure Washing", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "lawn-care": { label: "Lawn Care", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "irrigation": { label: "Irrigation & Sprinklers", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "paving": { label: "Asphalt & Paving", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "masonry": { label: "Masonry & Brick", schemaType: "GeneralContractor", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "concrete": { label: "Concrete Service", schemaType: "GeneralContractor", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "solar": { label: "Solar Installation", schemaType: "Electrician", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "excavation": { label: "Excavation", schemaType: "GeneralContractor", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "waterproofing": { label: "Waterproofing", schemaType: "GeneralContractor", licenseRequired: false, regulated: true, primaryCategory: "home_service" },
    "foundation": { label: "Foundation Repair", schemaType: "GeneralContractor", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "septic": { label: "Septic Service", schemaType: "Plumber", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "chimney": { label: "Chimney Sweeps", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: false, primaryCategory: "home_service" },

    // --- INTERIOR & REMODELING ---
    "kitchen-remodel": { label: "Kitchen Remodeling", schemaType: "GeneralContractor", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "bathroom-remodel": { label: "Bathroom Remodeling", schemaType: "GeneralContractor", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "flooring": { label: "Flooring", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "carpet-cleaning": { label: "Carpet Cleaning", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "painting": { label: "Painting", schemaType: "HousePainter", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "drywall": { label: "Drywall & Insulation", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "house-cleaning": { label: "House Cleaning", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "mold-removal": { label: "Mold Removal", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "water-damage": { label: "Water Damage Restoration", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "fire-damage": { label: "Fire Damage Restoration", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "handyman": { label: "Handyman", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "junk-removal": { label: "Junk Removal", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "locksmith": { label: "Locksmith", schemaType: "Locksmith", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "appliance-repair": { label: "Appliance Repair", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "home-theater": { label: "Home Theater & AV", schemaType: "Electrician", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "security-systems": { label: "Security Systems", schemaType: "SecuritySystem", licenseRequired: true, regulated: true, primaryCategory: "home_service" },
    "interior-design": { label: "Interior Design", schemaType: "HomeAndConstructionBusiness", licenseRequired: false, regulated: false, primaryCategory: "home_service" },
    "moving": { label: "Moving Services", schemaType: "HomeAndConstructionBusiness", licenseRequired: true, regulated: true, primaryCategory: "home_service" },

    // --- INSURANCE (LEAD GEN) ---
    "auto-insurance": { label: "Auto Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "home-insurance": { label: "Home Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "life-insurance": { label: "Life Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "health-insurance": { label: "Health Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "business-insurance": { label: "Business Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "renters-insurance": { label: "Renters Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "motorcycle-insurance": { label: "Motorcycle Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "boat-insurance": { label: "Boat Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "pet-insurance": { label: "Pet Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "travel-insurance": { label: "Travel Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "medicare-insurance": { label: "Medicare Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
    "final-expense": { label: "Final Expense Insurance", schemaType: "InsuranceAgency", licenseRequired: true, regulated: true, primaryCategory: "insurance" },
} as const;

export type ServiceType = keyof typeof SERVICE_REGISTRY;

export const ALL_SERVICE_TYPES = Object.keys(SERVICE_REGISTRY) as ServiceType[];

export function getServiceMeta(type: ServiceType): ServiceMeta {
    return SERVICE_REGISTRY[type];
}

// --- CURRENT CONFIGURATION ---
// Change this single value to switch the entire site's niche.
// Supported values: any key from SERVICE_REGISTRY above.
export const serviceConfig = {
    type: "deck" as ServiceType,
};
