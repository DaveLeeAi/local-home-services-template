export const blogPosts = [
    {
        slug: "cost-to-build-deck-atlanta",
        title: "How Much Does It Cost to Build a Deck in Atlanta?",
        date: "February 1, 2026",
        excerpt: "Understanding the factors that influence deck pricing in the Atlanta metro area, from materials to size and labor.",
        content: `
## Budgeting for Your New Deck

One of the first questions we get from Atlanta homeowners is, "How much will this cost?" It's a fair question, but the answer depends on several key variables.

### 1. Material Choice: Wood vs. Composite
The biggest driver of cost is your decking material. 
- **Pressure-Treated Pine**: The most affordable option upfront. It gives you that classic wood look but requires annual staining and sealing to prevent rot in our humid Georgia climate.
- **Composite (Trex/TimberTech)**: Costs 30-50% more initially but pays for itself over time. It never rots, warps, or fades, and you'll never have to sand or stain it.

### 2. Size and Elevation
A simple 12x12 ground-level deck is much cheaper than a 20x20 second-story deck. Elevated decks require larger posts, more bracing, and significantly more labor to ensure safety.

### 3. Features and Accessories
Do you want built-in benches? Integrated LED lighting? A pergola for shade? These additions transform a deck into an outdoor living room but will add to the budget.

### The Bottom Line
For a professionally built 300 sq. ft. deck in the Atlanta metro area, you can expect to invest anywhere from $15,000 for basic wood to $35,000+ for premium composite with railings and lighting.
        `
    },
    {
        slug: "wood-vs-composite-georgia",
        title: "Wood vs Composite Decks: What Works Best in Georgia?",
        date: "January 25, 2026",
        excerpt: "Comparing the durability, maintenance, and cost of pressure-treated pine versus composite decking in our humid climate.",
        content: `
## The Battle Against Humidity

Georgia weather is tough on wood. The constant cycle of soaking rain, high humidity, and baking sun causes natural wood to expand and contract rapidly. This leads to:
- Splintering and cracking
- Warping and twisting boards
- Fastener popping
- Mold and mildew growth

### Why We Recommend Composite
Modern composite decking (like Trex or TimberTech) is an engineered product designed to resist these exact issues. It is wrapped in a protective shell that makes it impervious to moisture.

### Maintenance Comparison
**Wood Deck:**
- Power wash annually
- Sand and stain every 2-3 years
- Check for loose nails and rot constantly

**Composite Deck:**
- Wash with soap and water once a year
- Relax

While wood offers a lower entry price, composite is the hands-down winner for long-term value and enjoyment in the South.
        `
    },
    {
        slug: "permit-deck-atlanta",
        title: "Do You Need a Permit to Build a Deck in Atlanta?",
        date: "January 15, 2026",
        excerpt: "Navigating local building codes and why skipping the permit process can cost you more in the long run.",
        content: `
## Yes, You Likely Need a Permit

In almost every jurisdiction in the Atlanta Metro area—including Fulton, Cobb, Gwinnett, and DeKalb counties—a building permit is required for deck construction.

### When is a permit required?
Generally, if the deck is:
- More than 30 inches off the ground
- Attached to the house
- Larger than 200 square feet

### Why you shouldn't skip it
We know it's tempting to skip the bureaucracy, but building without a permit carries major risks:
1. **Safety**: Inspections ensure your deck won't collapse during a party.
2. **Resale Value**: When you sell your home, unpermitted work can kill a deal or force you to tear it down.
3. **Insurance**: If someone gets hurt on an illegal deck, your homeowner's insurance may deny the claim.

At Peachtree Outdoor Living, we handle the entire permitting process for you, from drawing the plans to meeting the inspector.
        `
    },
    {
        slug: "5-signs-deck-repair",
        title: "5 Signs Your Deck Needs Repair or Replacement",
        date: "January 10, 2026",
        excerpt: "How to spot dangerous rot, loose railings, and structural issues before they become major safety hazards.",
        content: `
## Don't Ignore These Warning Signs

Decks have a lifespan. If yours is over 15 years old, it's time to take a close look.

1. **Wobbly Railings**: This is a major safety hazard. If you lean on the rail and it moves, the connection points are likely failing.
2. **Soft Spots in Wood**: Use a screwdriver to probe posts and joists near the ground. If the wood feels spongy, you have rot.
3. **Rusting Hardware**: Connectors and joist hangers should be galvanized. If they are rusted through, your deck's structural integrity is compromised.
4. **Ledger Board Gap**: Look where the deck meets your house. If there is a gap or it looks like it's pulling away, call a professional immediately. This is the most common cause of deck collapse.
5. **Cracked or Splintered Boards**: Besides being painful for bare feet, extensive cracking indicates the wood has dried out and lost its strength.

If you see these signs, book a safety inspection with us today.
        `
    },
    {
        slug: "best-deck-materials-south",
        title: "Best Deck Materials for Hot, Humid Southern Climates",
        date: "January 5, 2026",
        excerpt: "Why certain materials perform better than others when exposed to intense UV rays and moisture.",
        content: `
## Material Matters

Not all decking is created equal, especially when perfectly good days can reach 98 degrees with 90% humidity.

### 1. PVC-Capped Composite
This is the gold standard (e.g., TimberTech AZEK). It contains no organic material, so it cannot feed mold or rot. It also stays cooler to the touch than cheaper composites.

### 2. Tropical Hardwoods (Ipe)
If you insist on real wood, Ipe is the way to go. It's incredibly dense, naturally resistant to rot and insects, and lasts 40+ years. However, it is expensive and difficult to install.

### 3. Pressure-Treated Pine (KDAT)
If you choose pine, look for "Kiln Dried After Treatment" (KDAT). It has had the excess moisture removed, which reduces the shrinking and warping that happens when standard wet treated lumber dries out in the sun.

Avoid Cedar and Redwood in Georgia unless you plan to seal them meticulously—they generally don't hold up as well here as they do in drier climates.
        `
    }
];

export function getPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
