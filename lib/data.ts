import {
    Car, Settings, BarChart3, AppWindow, ShieldCheck, Zap,
    Cpu, CircleDot, Disc,
    Armchair, Cog,
    MoveVertical
} from "lucide-react";

export const SITE_CONFIG = {
    name: "Red Dune",
    description: "Premium Automotive Services in UAE",
    navItems: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Products", href: "/#products" },
        { label: "Contact", href: "/#contact" },
    ],
};

export const NAV_DROPDOWNS = {
    services: [
        { label: "Recovery Services", href: "/services/recovery" },
        { label: "Engine & Gearbox", href: "/services/enginegear" },
        { label: "Engineering & Programming", href: "/services/engineering" },
        { label: "Body Shop", href: "/services/bodyshop" },
        { label: "Workshop", href: "/services/workshop" },
    ],
    brands: [
        // Column 1
        [
            { label: "Aston Martin", href: "/#brands" },
            { label: "Ferrari", href: "/#brands" },
            { label: "Maserati", href: "/#brands" },
            { label: "Rolls Royce", href: "/#brands" },
            { label: "Bugatti", href: "/#brands" },
        ],
        // Column 2
        [
            { label: "Audi", href: "/#brands" },
            { label: "Jaguar", href: "/#brands" },
            { label: "Mercedes", href: "/#brands" },
            { label: "McLaren", href: "/#brands" },
            { label: "Maybach", href: "/#brands" },
        ],
        // Column 3
        [
            { label: "Bentley", href: "/#brands" },
            { label: "Lamborghini", href: "/#brands" },
            { label: "Range Rover", href: "/#brands" },
            { label: "Volkswagen", href: "/#brands" },
            { label: "Mini Cooper", href: "/#brands" },
        ],
        // Column 4
        [
            { label: "BMW", href: "/#brands" },
            { label: "Land Rover", href: "/#brands" },
            { label: "Porsche", href: "/#brands" },
            { label: "Alfa Romeo", href: "/#brands" },
            { label: "Smart Car", href: "/#brands" },
        ],
    ],
    products: [
        { label: "Spare Parts", href: "/products/spare-parts" },
        { label: "Service Contract", href: "/products/service-contract" },
        { label: "360 Inspections", href: "/products/360-inspections" },
    ],
};

export const PRODUCT_DETAILS = [
    {
        id: "spare-parts",
        title: "Genuine Spare Parts",
        description: "At Red Dune, we understand that every part plays a crucial role in your vehicle's performance and safety. We supply 100% authentic OEM (Original Equipment Manufacturer) spare parts for all major all luxury brands. Our global supply network ensures that even hard-to-find components are sourced quickly, guaranteeing that your vehicle maintains its factory specifications and value.",
        features: ["100% Genuine OEM Parts", "12-Month Warranty", "Express Global Shipping", "Competitive Market Rates"],
        benefits: [
            { title: "Factory Precision", description: "Parts designed specifically for your vehicle model ensure perfect fit and optimal performance." },
            { title: "Longevity", description: "Genuine parts are built to last, reducing the need for frequent replacements and saving money in the long run." },
            { title: "Resale Value", description: "Maintaining your car with original parts preserves its history and keeps its resale value high." },
            { title: "Safety Assurance", description: "Never compromise on safety with counterfeit alternatives. Our parts meet strict safety standards." }
        ],
        image: "/images/products/spare-parts.jpg",
    },
    {
        id: "service-contract",
        title: "Service Contract",
        description: "Enjoy complete peace of mind and significant savings with our tailored Service Contracts. Designed to cover all your scheduled maintenance needs, our packages protect you from inflation and unexpected price rises. Whether you drive a daily commuter or a weekend sports car, we have a plan that fits your mileage and usage perfectly.",
        features: ["Up to 40% Savings", "Inflation Proof", "Transferable Benefits", "Full Service History"],
        benefits: [
            { title: "Cost Control", description: "Lock in today's labor and parts prices for the duration of your contract, avoiding future price hikes." },
            { title: "Regular Care", description: "Scheduled servicing ensures your vehicle runs efficiently and prevents minor issues from becoming major repairs." },
            { title: "Priority Status", description: "Contract holders receive priority booking and expedited service at our centers." },
            { title: "Certified Expertise", description: "All work is performed by our certified German car specialists using official manufacturer guidelines." }
        ],
        image: "/images/products/service-contract.jpg",
    },
    {
        id: "warranty-contract",
        title: "Warranty Contract",
        description: "Drive with confidence knowing that you are protected against unexpected mechanical and electrical failures. Our Extended Warranty Contracts offer comprehensive coverage similar to your manufacturer's warranty, picking up where it left off. From engine and transmission to complex electronics, we've got you covered.",
        features: ["Comprehensive Coverage", "Zero Deductible", "24/7 Roadside Assist", "High Claim Limits"],
        benefits: [
            { title: "Major Systems Covered", description: "Protection for Engine, Gearbox, Differential, AC System, Electrical Components, and more." },
            { title: "Hassle-Free Claims", description: "We handle all the paperwork and direct billing, so you don't have to pay out of pocket for covered repairs." },
            { title: "Transferable", description: "Increase your car's resale value by transferring the warranty to the new owner." },
            { title: "Unlimited Mileage", description: "Options available for unlimited mileage coverage to suit your driving habits." }
        ],
        image: "/images/products/warranty.jpg",
    },
    {
        id: "360-inspections",
        title: "360 Inspections",
        description: "Buying a pre-owned luxury car? Ensure you're making a smart investment with our comprehensive 360-degree Inspection. Our certified technicians perform a rigorous 111-point check covering every aspect of the vehicle, from the engine and chassis to the paintwork and interior electronics. You receive a detailed digital report with photos and expert recommendations.",
        features: ["111-Point Check", "Digital Report", "Paint Depth Analysis", "Computer Diagnostics"], 
        benefits: [
            { title: "Hidden Issue Detection", description: "We identify past accident damage, resprayed panels, and mechanical faults that aren't visible to the naked eye." },
            { title: "Negotiation Power", description: "Use our unbiased report to negotiate a fair price based on the vehicle's true condition." },
            { title: "Peace of Mind", description: "Buy with confidence knowing exactly what you're getting into, with no nasty surprises later." },
            { title: "Test Drive Analysis", description: "Our experts road-test the vehicle to check for noises, vibrations, and handling issues." }
        ],
        image: "/images/products/inspection.jpg",
    },
    {
        id: "insurance",
        title: "Car Insurance",
        description: "Navigating car insurance can be complex. We simplify the process by partnering with the UAE's leading insurance providers to offer you the best coverage at competitive rates. Beyond just selling a policy, we manage the entire claims process for you—from accident recovery to final repair—ensuring your car is restored to factory standards at Red Dune.",
        features: ["Best Rates", "Claims Management", "Agency Repair Option", "Replacement Car"],
        benefits: [
            { title: "One-Stop Solution", description: "We handle everything: policy issuance, renewal, and claims. You just drive." },
            { title: "Guaranteed Repairs", description: "Policies purchased through us guarantee repairs at Red Dune with genuine parts." },
            { title: "Claims Advocacy", description: "We fight for your rights effectively to ensure your claim is approved and processed quickly." },
            { title: "Tailored Coverage", description: "Get coverage that actually matches your high-value vehicle's needs, including off-road and GCC cover." }
        ],
        image: "/images/products/insurance.jpg",
    },
];

export const SERVICES = [
    {
        title: "Performance Tuning",
        description: "Optimize your vehicle's engine for peak performance and efficiency.",
        icon: Zap,
    },
    {
        title: "Maintenance & Repair",
        description: "Comprehensive diagnostics and repair services for all luxury car brands.",
        icon: Settings,
    },
    {
        title: "Body Shop & Painting",
        description: "State-of-the-art body repair and premium paint services.",
        icon: Car,
    },
    {
        title: "Detailing & Protection",
        description: "Ceramic coating, PPF, and interior detailing to keep your car looking new.",
        icon: ShieldCheck,
    },
];

export const SERVICE_DETAILS = [
    {
        id: "service",
        title: "SERVICE",
        description: "Our comprehensive service packages ensure your vehicle performs at its best. From routine maintenance to complex repairs, our certified technicians use state-of-the-art diagnostic tools to identify and resolve issues with precision. We use only genuine parts to maintain the integrity and value of your luxury vehicle.",
        image: "/images/services1.jpg",
        link: "/services/enginegear",
    },
    {
        id: "workshop",
        title: "WORKSHOP",
        description: "Our world-class workshop is equipped with the latest technology to handle any automotive challenge. We maintain a pristine, organized environment that reflects the quality of work we deliver. Whether it's a minor adjustment or a major overhaul, your car is in the safest hands.",
        image: "/images/services.jpg",
        link: "/services/workshop",
    },
    {
        id: "body-shop",
        title: "BODY SHOP",
        description: "Nothing beats getting a body shop service from us when it comes to having a luxurious appearance on the road. As we care to meet your expectations, our professional team offers only the highest technology body shop solutions. Whether you need to repair a tiny scratch, a broken window, or even a windscreen replacement, we do it all! Our team covers a wide range of body shop services that would help you admire your vehicle on the roads of Dubai",
        image: "/images/download.jpg",
        link: "/services/bodyshop",
    },
    {
        id: "engineering",
        title: "ENGINEERING AND PROGRAMMING",
        description: "Unlock the full potential of your vehicle with our advanced engineering and programming services. We offer ECU tuning, performance upgrades, and software updates tailored to your specific driving preferences. Enhance power, efficiency, and responsiveness with our custom solutions.",
        image: "/images/engineering.jpg",
        link: "/services/engineering",
    },
    {
        id: "engine-gearbox",
        title: "ENGINE AND GEARBOX",
        description: "The heart of your vehicle deserves the utmost care. Our engine and gearbox specialists are experts in diagnosing and repairing complex mechanical issues. From engine rebuilds to transmission servicing, we ensure smooth power delivery and reliability for the long haul.",
        image: "/images/2.jpg",
        link: "/services/enginegear",
    },
    {
        id: "recovery",
        title: "RECOVERY SERVICE",
        description: "Stranded? Our premium recovery service is available 24/7 to assist you. We provide safe and professional towing for luxury vehicles, ensuring they are transported without a scratch to our workshop. Peace of mind is just a phone call away.",
        image: "/images/recovery.jpg",
        link: "/services/recovery",
    },
];

export const FEATURES = [
    {
        title: "Red Dune German Experts",
        description: "Certified technicians specializing in all luxury vehicles.",
        icon: ShieldCheck,
    },
    {
        title: "Advanced Diagnostics",
        description: "Latest diagnostic tools to identify issues accurately.",
        icon: BarChart3,
    },
    {
        title: "Genuine Parts",
        description: "We use only original manufacturer parts for repairs.",
        icon: Settings,
    },
    {
        title: "Premium Experience",
        description: "Comfortable lounge and transparent service process.",
        icon: AppWindow,
    },
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "Essential Maintenance Tips for Luxury Cars",
        excerpt: "Keep your high-performance vehicle in top condition with these expert tips.",
        date: "Oct 12, 2023",
        image: "/images/blog1.jpg",
    },
    {
        id: 2,
        title: "Understanding ECU Tuning: Benefits & Risks",
        excerpt: "Unlock the hidden potential of your engine with professional tuning.",
        date: "Sep 28, 2023",
        image: "/images/blog2.jpg",
    },
    {
        id: 3,
        title: "Ceramic Coating vs. PPF: Which is Right for You?",
        excerpt: "A detailed comparison of paint protection solutions.",
        date: "Sep 15, 2023",
        image: "/images/blog3.jpg",
    },
];

export const WORKSHOP_SERVICES = [
    { id: "ws-workshop", title: "Engine Management System", icon: Settings, description: "Our workshop operates with a modern Engine Management System to ensure accurate diagnostics, efficient performance, and reliable vehicle solutions", image: "/images/engineering (2).jpg", href: "/services/workshop/engine-management-system" },
    { id: "ws-bodyshop", title: "Car Comfort", icon: ShieldCheck, description: "We enhance car comfort with advanced climate control, smooth suspension tuning, and premium interior solutions", image: "/images/how.jpg", href: "/services/workshop/comfort-system" },
    { id: "ws-programming", title: "Brake System", icon: Cpu, description: "We provide complete brake system inspection, repair, and replacement to ensure maximum safety and control.", image: "/images/s2.jpg", href: "/services/workshop/brake-system" },
    { id: "ws-engine", title: "Oil Change Service", icon: Cog, description: "We provide quick and professional oil change services to keep your engine running smoothly and efficiently.", image: "/images/oil.jpg", href: "/services/workshop/oil-change" },
    { id: "ws-recovery", title: "Wheel Alignment", icon: Car, description: "We provide precise wheel alignment services to ensure smooth driving, better control, and even tire wear.", image: "/images/wheel.jpg", href: "/services/workshop/wheel-alignment" },
    { id: "ws-headlight", title: "Stop & Go Service", icon: Zap, description: "Our Stop & Go Service ensures quick inspection and fast maintenance for busy drivers on the move.", image: "/images/headlight.jpg", href: "/services/workshop/stop-go" },
    { id: "ws-roof", title: "Fuel Injection Service", icon: MoveVertical, description: "We provide professional fuel injection cleaning and servicing to ensure smooth engine performance and better fuel efficiency", image: "/images/fuel.jpg", href: "/services/workshop/fuel-injection" },
    
];

export const BODYSHOP_SERVICES = [
    {
        id: "bs-dashboard",
        title: "Dashboard Leather or Replacement",
        icon: Armchair,
        description: "Premium leather wrapping and dashboard restoration.",
        image: "/images/dashboard cover.jpg",
        href: "/services/bodyshop/dashboard-leather-or-replacement",
    },
    {
        id: "bs-restoration",
        title: "Classic Car Restoration",
        icon: Car,
        description: "Bringing vintage beauties back to life.",
        image: "/images/classic.jfif",
        href: "/services/bodyshop/classic-car-restoration",
    },
    {
        id: "bs-headlight",
        title: "Headlight Restoration",
        icon: Zap,
        description: "Restoring clarity and brightness to headlights.",
        image: "/images/headlight.jpg",
        href: "/services/bodyshop/headlight-restoration",
    },
    {
        id: "bs-windscreen",
        title: "Windscreen Restoration",
        icon: AppWindow,
        description: "Repairing chips and cracks for clear vision.",
        image: "/images/windscreen.jpg",
        href: "/services/bodyshop/windscreen-restoration",
    },
    {
        id: "bs-roof",
        title: "Roof Lining Repair",
        icon: MoveVertical,
        description: "Fixing sagging headliners and fabrics.",
        image: "/images/roof lining.jpg",
        href: "/services/bodyshop/roof-lining-repair",
    },
    {
        id: "bs-alloy",
        title: "Alloy Wheel Repair",
        icon: CircleDot,
        description: "Fixing curb rash, bends, and cosmetic damage.",
        image: "/images/alloy.jpg",
        href: "/services/bodyshop/alloy-wheel-repair",
    },
    {
        id: "bs-upholstery",
        title: "Upholstery & Refurbishment",
        icon: Armchair,
        description: "Interior seat repair and material refurbishment.",
        image: "/images/Upholstery & Refurbishment.jpg",
        href: "/services/bodyshop/upholstery-and-refurbishment",
    },
    {
        id: "bs-denting",
        title: "Denting Painting",
        icon: Disc,
        description: "Professional dent removal and spray painting.",
        image: "/images/car painting.jpg",
        href: "/services/bodyshop/denting-painting",
    },
    {
        id: "bs-chassis",
        title: "Chassis Repair",
        icon: Settings,
        description: "Frame straightening and structural alignment.",
        image: "/images/chasses.jpg",
        href: "/services/bodyshop/chassis-repair",
    },
    {
        id: "bs-rims",
        title: "Rims and Caliper",
        icon: CircleDot,
        description: "Custom painting and repair for rims and calipers.",
        image: "/images/caliper.jpg",
        href: "/services/bodyshop/rims-and-caliper",
    },
    {
        id: "bs-bodykit",
        title: "Car Body Kit",
        icon: Car,
        description: "Installation and styling of custom body kits.",
        image: "/images/car body kit.jpg",
        href: "/services/bodyshop/car-body-kit",
    },
];

export const BODYSHOP_PAGE_DATA = [
    {
        id: "dashboard-leather-or-replacement",
        title: "Dashboard Leather or Replacement",
        sections: [
            {
                heading: "Premium Dashboard Restoration",
                description:
                    "Internal heat and sun exposure can cause your dashboard to crack, fade, or peel. Our expert craftsmen specialize in restoring your dashboard to its original glory using premium automotive-grade leather and high-quality materials. Whether you need a full replacement or a custom wrap, we ensure a factory-perfect finish.",
                image: "/images/dashboard cover.jpg",
            },
            {
                heading: "Why Choose Our Dashboard Services?",
                description:
                    "We provide a range of solutions tailored to your vehicle's specific needs and your personal style preferences:",
                image: "/images/dashboard/dash1.jpg",
                list: [
                    "Genuine OEM-spec leather wrapping",
                    "Custom stitching patterns and colors",
                    "Repair of cracks and structural damage",
                    "High-temperature resistant adhesives",
                    "Perfect fitment with all vents and electronics",
                ],
            },
            {
                heading: "Restore Your Interior Look",
                description:
                    "A well-maintained dashboard significantly enhances the premium feel and resale value of your luxury car. Trust our specialists to deliver excellence.",
                image: "/images/dashboard/dash2.jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "classic-car-restoration",
        title: "Classic Car Restoration",
        sections: [
            {
                heading: "Bringing History Back to Life",
                description:
                    "Restoring a classic car is more than just repair; it's an art form. At Red Dune, we combine traditional craftsmanship with modern technology to meticulously restore vintage automobiles. From frame-off restorations to engine overhauls and period-correct interior refurbishment, we treat every classic as a masterpiece.",
                image: "/images/classic.jfif",
            },
            {
                heading: "Our Restoration Process",
                description:
                    "We follow a comprehensive approach to ensure every vintage beauty is restored with the respect it deserves:",
                image: "/images/chasses.jpg",
                list: [
                    "Full body-off-frame restoration",
                    "Precision metal fabrication and rust repair",
                    "Authentic period-correct painting",
                    "Complete mechanical systems overhaul",
                    "Bespoke interior re-upholstery",
                ],
            },
            {
                heading: "Preserve Automotive Heritage",
                description:
                    "Whether it's a family heirloom or a rare collector's item, we have the expertise to make it run and look like it just rolled off the showroom floor.",
                image: "/images/restoration/res1.jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "headlight-restoration",
        title: "Headlight Restoration",
        sections: [
            {
                heading: "Crystal Clear Vision & Safety",
                description:
                    "Fuzzy, yellowed, or oxidized headlights not only look aged but also significantly reduce nighttime visibility and safety. Our professional restoration process removes the oxidized layer and applies a high-quality UV-resistant coating, bringing back the original clarity and brightness of your lenses.",
                image: "/images/headlight.jpg",
            },
            {
                heading: "Professional Restoration vs. Quick Fixes",
                description:
                    "Unlike temporary DIY kits, our multi-stage process ensures a long-lasting, showroom-quality finish:",
                image: "/images/restoration/head1.jpg",
                list: [
                    "Precision wet-sanding to remove oxidation",
                    "Multi-stage machine polishing",
                    "Ceramic or UV-protective clear coating",
                    "Internal cleaning (where possible)",
                    "Verification of light beam patterns",
                ],
            },
            {
                heading: "Enhance Your Car's Appearance",
                description:
                    "Clear headlights instantly make your car look younger and more premium. Don't replace expensive lamp assemblies when you can restore them.",
                image: "/images/restoration/head2.jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "windscreen-restoration",
        title: "Windscreen Restoration",
        sections: [
            {
                heading: "Repairing Chips and Cracks",
                description:
                    "A small chip in your windshield can quickly turn into a dangerous crack if left unattended. Our expert technicians use advanced resin-injection technology to repair chips and small cracks, restoring the structural integrity and clarity of your windscreen without the need for a full replacement.",
                image: "/images/windscreen.jpg",
            },
            {
                heading: "Benefits of Professional Repair",
                description:
                    "Early intervention can save you time and money while ensuring your safety on the road:",
                image: "/images/wind/wind (1).jpg",
                list: [
                    "Prevents small chips from spreading",
                    "Restores structural safety of the glass",
                    "Maintains the factory seal and sensors",
                    "Eco-friendly alternative to replacement",
                    "Fast and cost-effective solution",
                ],
            },
            {
                heading: "Clear View Ahead",
                description:
                    "Maintain perfect visibility and avoid costly replacements. If the damage is too extensive, we also offer professional manufacturer-spec replacements.",
                image: "/images/wind/wind (2).jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "roof-lining-repair",
        title: "Roof Lining Repair",
        sections: [
            {
                heading: "Fixing Sagging Headliners",
                description:
                    "Sagging or detached roof lining is a common issue, especially in the UAE's heat. It's not only unsightly but can also obstruct the driver's view. We provide professional headliner replacement using high-quality fabrics, foams, and heat-resistant adhesives that are designed to withstand the harshest temperatures.",
                image: "/images/roof lining.jpg",
            },
            {
                heading: "Our Headliner Solutions",
                description:
                    "We offer a variety of materials and finishes to match your original interior or give it a custom upgrade:",
                image: "/images/wind/roof (1).jpg",
                list: [
                    "Full headliner removal and replacement",
                    "Wide selection of OEM and custom fabrics",
                    "Specialized heat-resistant bonding agents",
                    "Repair of sunroof glides and surrounds",
                    "A-pillar, B-pillar, and C-pillar wrapping",
                ],
            },
            {
                heading: "Restore Your Interior Comfort",
                description:
                    "A tight, clean headliner makes the cabin feel new again. Our work is backed by a quality guarantee against future sagging.",
                image: "/images/wind/roof (2).jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "alloy-wheel-repair",
        title: "Alloy Wheel Repair",
        sections: [
            {
                heading: "Fixing Curb Rash & Cosmetic Damage",
                description:
                    "Scratched or dented alloy wheels can ruin the look of a luxury vehicle. Our alloy wheel restoration service includes curb rash removal, straightening of minor bends, and professional refinishing. We can match any factory finish or provide custom colors and finishes to suit your style.",
                image: "/images/alloy.jpg",
            },
            {
                heading: "Comprehensive Wheel Services",
                description:
                    "From minor scratches to structural straightening, we handle it all with precision:",
                image: "/images/wheel.jpg",
                list: [
                    "Curb rash and scratch removal",
                    "CNC Diamond cutting and machining",
                    "Powder coating and custom painting",
                    "Wheel straightening and crack repair",
                    "High-speed balancing after repair",
                ],
            },
            {
                heading: "Roll with Style",
                description:
                    "Don't let damaged wheels dim your car's shine. Restore them to their original glory or opt for a bold new look today.",
                image: "/images/caliper.jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "upholstery-and-refurbishment",
        title: "Upholstery & Refurbishment",
        sections: [
            {
                heading: "Premium Interior Seat Repair",
                description:
                    "Over time, even the highest quality leather seats can show signs of wear, tears, or fading. Our upholstery specialists are masters at refurbishing leather, Alcantara, and fabric interiors. Using specialized dyes and repair techniques, we can make worn seats look brand new or completely customize your cabin.",
                image: "/images/Upholstery & Refurbishment.jpg",
            },
            {
                heading: "Bespoke Interior Services",
                description:
                    "We offer a full range of interior refurbishment services for luxury and exotic cars:",
                image: "/images/wind/int (1).jpg",
                list: [
                    "Leather seat repair and re-dyeing",
                    "Custom leather and Alcantara stitching",
                    "Foam restoration for better comfort",
                    "Door panel and center console refurbishment",
                    "Deep interior detailing and sanitization",
                ],
            },
            {
                heading: "The Ultimate Cabin Experience",
                description:
                    "You spend most of your time inside the car; make it a beautiful and comfortable place to be with our expert upholstery services.",
                image: "/images/services.jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "denting-painting",
        title: "Denting Painting",
        sections: [
            {
                heading: "Professional Dent Removal & Spray Painting",
                description:
                    "From minor shopping cart dings to major collision damage, our body shop is equipped to handle all levels of repair. We use advanced dent-pulling technology and a state-of-the-art paint booth to ensure a seamless repair. Our paint-matching system guarantees a factory-standard finish every time.",
                image: "/images/car painting.jpg",
            },
            {
                heading: "Collision Repair Expertise",
                description:
                    "We provide comprehensive body repair services that focus on both aesthetics and structural integrity:",
                image: "/images/wind/dent (2).jpg",
                list: [
                    "Precision dent removal (including PDR)",
                    "Advanced computerized color matching",
                    "Premium Glasurit or equivalent paint systems",
                    "High-temperature baking oven for durability",
                    "Full-body resprays and color changes",
                ],
            },
            {
                heading: "Flawless Showroom Finish",
                description:
                    "Your luxury car deserves a finish that is indistinguishable from the original factory paint. Trust our master painters to deliver perfection.",
                image: "/images/wind/dent (1).jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "chassis-repair",
        title: "Chassis Repair",
        sections: [
            {
                heading: "Frame Straightening & Structural Alignment",
                description:
                    "The chassis is the foundation of your vehicle's safety and performance. After a collision, it's crucial to ensure the frame is perfectly aligned. Using laser-guided computerized pulling systems, we restore your car's chassis to original manufacturer tolerances, ensuring safe handling and proper component fitment.",
                image: "/images/chasses.jpg",
            },
            {
                heading: "Structural Integrity Assurance",
                description:
                    "We take no shortcuts when it comes to the safety and alignment of your vehicle:",
                image: "/images/wind/chass (1).jpg",
                list: [
                    "Computerized 3D chassis measuring",
                    "High-strength steel and aluminum welding",
                    "Suspension mounting point alignment",
                    "Safety crumple zone restoration",
                    "Detailed pre- and post-repair reports",
                ],
            },
            {
                heading: "Drive with Confidence",
                description:
                    "A straight chassis means predictable handling and maximum occupant safety. We ensure your car is as solid as the day it was built.",
                image: "/images/wind/chass (3).jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "rims-and-caliper",
        title: "Rims and Caliper",
        sections: [
            {
                heading: "Custom Painting and Style",
                description:
                    "Make a statement with custom-painted rims and brake calipers. We use high-temperature resistant coatings specifically designed for the heat generated during braking. Choose from a wide palette of colors, including metallic, matte, and glossy finishes, completed with custom logos and detailing.",
                image: "/images/caliper.jpg",
            },
            {
                heading: "Our Performance Styling Options",
                description:
                    "Enhance the athletic look of your luxury car with our specialized painting services:",
                image: "/images/wind/rim (2).jpg",
                list: [
                    "High-temperature caliper painting",
                    "Custom logos and decals (Brembo, AMG, etc.)",
                    "Two-tone and accented rim finishes",
                    "Clear coat protection for lasting shine",
                    "Wheel hub cleaning and refinishing",
                ],
            },
            {
                heading: "Attention to Detail",
                description:
                    "It's the small details that set your car apart. Custom calipers peeking through pristine rims create a truly high-end, customized look.",
                image: "/images/wind/rim (1).jpg",
                cta: "Reach us now",
            },
        ],
    },
    {
        id: "car-body-kit",
        title: "Car Body Kit",
        sections: [
            {
                heading: "Installation and Styling",
                description:
                    "Transform the appearance and aerodynamics of your car with a professional body kit installation. Whether you're looking for subtle lip spoilers or aggressive wide-body conversions, our team handles the fitting, painting, and integration with meticulous care to ensure a seamless factory-like look.",
                image: "/images/car body kit.jpg",
            },
            {
                heading: "Styling & Aerodynamics",
                description:
                    "We work with leading performance brands to provide and install high-quality body components:",
                image: "/images/wind/1.jpg",
                list: [
                    "Front and rear lip spoilers and splitters",
                    "Side skirts and fender flare installation",
                    "Rear diffusers and wing spoilers",
                    "Full aerokit conversions (e.g., Mansory, Brabus)",
                    "Carbon fiber component integration",
                ],
            },
            {
                heading: "Define Your Vehicle's Character",
                description:
                    "Stand out from the crowd with a unique profile. Our expert installation ensures that your kit looks like it was designed by the manufacturer.",
                image: "/images/wind/2.jpg",
                cta: "Reach us now",
            },
        ],
    },
];

export const ENGINEERING_SERVICES = [
    { id: "eng-retrofit", title: "Retrofit", icon: Settings, description: "Upgrading older vehicles with modern features.", image: "/images/retrofit.jfif", href: "/services/engineering/retrofit" },
    { id: "eng-radar", title: "Radar Calibration", icon: CircleDot, description: "Precision calibration for safety systems.", image: "/images/radar.jfif", href: "/services/engineering/radar" },
    { id: "eng-nav", title: "Navigation Update", icon: AppWindow, description: "Latest maps and software for your GPS.", image: "/images/navigation.jfif", href: "/services/engineering/navigation" },
    { id: "eng-programming", title: "Programming", icon: Cpu, description: "Software programming and module coding.", image: "/images/programming.jfif", href: "/services/engineering/programming" },
];

export const ENGINEERING_PAGE_DATA = [
    {
        id: "radar",
        title: "Radar Calibration",
        sections: [
            {
                heading: "ADAS & Radar Calibration",
                description: "Advanced Driver Assistance Systems (ADAS) like adaptive cruise control, lane departure warning, and emergency braking rely on precise radar sensors. Even a slight misalignment due to a minor bump or windshield replacement can compromise your safety. At Red Dune, we use manufacturer-approved calibration equipment to ensure every sensor is perfectly aligned to factory specifications.",
                image: "/images/radar.jfif",
            },
            {
                heading: "How Often Should You Calibrate?",
                description: "Regular calibration is essential for maintaining the integrity of your car's safety systems. We recommend a check-up if you experience any of the following:",
                image: "/images/engi/rad2.jpg",
                list: [
                    "After a front-end collision or minor bumper impact",
                    "Following a windshield replacement (for camera-based systems)",
                    "If you notice warnings on your dashboard related to ADAS",
                    "After suspension repairs or wheel alignment changes",
                    "If the adaptive cruise control feels inconsistent"
                ]
            },
            {
                heading: "Why Choose Red Dune for Radar Calibration?",
                description: "Our team is equipped with the latest diagnostic and calibration tools specifically designed for All luxury brands. We don't just clear error codes; we perform physical and software-based alignment to ensure 100% accuracy.",
                image: "/images/engi/rad1.jpg",
                cta: "Reach us now"
            }
        ]
    },
    {
        id: "programming",
        title: "Software Programming & Coding",
        sections: [
            {
                heading: "Advanced ECU Programming",
                description: "Modern luxury vehicles are essentially computers on wheels. Every component, from the headlights to the transmission, is controlled by specialized software. Our programming services ensure that your vehicle's modules are running the latest software versions for optimal performance, fuel efficiency, and feature availability.",
                image: "/images/programming.jfif",
            },
            {
                heading: "Module Coding & Customization",
                description: "Replacing a module in a German car often requires specialized coding to match it with the vehicle's VIN and other systems. We provide expert coding services for:",
                image: "/images/engi/pro1.jpg",
                list: [
                    "New engine and transmission control modules",
                    "Comfort systems and lighting control coding",
                    "Enabling hidden factory features (where possible)",
                    "Language conversions and infotainment updates",
                    "Software error resolution and flashing"
                ]
            },
            {
                heading: "Expert Diagnostic Solutions",
                description: "Using OEM-level diagnostic software, we can identify and fix complex software glitches that generic scanners miss. Your car's digital health is our priority.",
                image: "/images/engi/pro2.jpg",
                cta: "Reach us now"
            }
        ]
    },
    {
        id: "retrofit",
        title: "Vehicle Retrofitting",
        sections: [
            {
                heading: "Modernize Your Luxury Vehicle",
                description: "Wish your older model had the latest tech? Our retrofitting services allow you to upgrade your vehicle with modern features that were either optional or not available when it was built. We use genuine components and factory-style wiring to ensure a seamless integration.",
                image: "/images/retrofit.jfif",
            },
            {
                heading: "Popular Retrofit Options",
                description: "Enhance your driving experience with high-quality upgrades tailored to your specific model:",
                image: "/images/engi/re0.jpg",
                list: [
                    "Apple CarPlay & Android Auto integration",
                    "Original ambient lighting systems",
                    "Surround-view and reverse camera installations",
                    "Digital instrument cluster (Virtual Cockpit) upgrades",
                    "Soft-close door systems and power tailgates"
                ]
            },
            {
                heading: "Factory Finish & Integration",
                description: "We take pride in our 'OEM Plus' approach. Every retrofit is performed with the same care and precision as if it were installed on the production line, maintaining your car's premium feel.",
                image: "/images/classic.jfif",
                cta: "Reach us now"
            }
        ]
    },
    {
        id: "navigation",
        title: "Navigation & Infotainment Updates",
        sections: [
            {
                heading: "Latest Map & Software Updates",
                description: "Don't let outdated maps lead you astray. We provide the latest GPS database updates for all major all luxury car brands, ensuring you have the most accurate routes, points of interest, and speed limit information available for the UAE and GCC region.",
                image: "/images/navigation.jfif",
            },
            {
                heading: "Enhanced Infotainment Experience",
                description: "Beyond maps, navigation updates often include improvements to the overall system performance, Bluetooth connectivity, and media compatibility. Our updates cover:",
                image: "/images/engi/nav1.jpg",
                list: [
                    "Official GCC map database updates",
                    "Infotainment system firmware flashing",
                    "Solving GPS signal and positioning issues",
                    "Adding New POIs (Points of Interest)",
                    "System responsiveness optimizations"
                ]
            },
            {
                heading: "Stay Connected & On Track",
                description: "A modern, updated navigation system is more than just a map; it's a co-pilot that ensures your journey is smooth and efficient. Let us handle the technical side so you can enjoy the drive.",
                image: "/images/engi/nav2.jpg",
                cta: "Reach us now"
            }
        ]
    }
];
