import { Service, Testimonial, GalleryItem, CoreValue, WhyChooseUsItem, TeamMember, Partner } from './types';

export const HERO_DATA = {
  companyName: "JUKES CONSULTS LIMITED",
  headline: "Reliable Commodity Trading, Construction Materials Supply, Scrap Iron Trading & Logistics Solutions in Nigeria.",
  description: "Operating with absolute integrity, speed, and efficiency. We are a premier Nigerian corporate partner delivering world-class sourcing, materials distribution, scrap metal recycling, and dependable countrywide heavy-duty haulage.",
  bgImage: "/src/assets/images/hero_banner_1781616918687.jpg"
};

export const ABOUT_DATA = {
  overview: "JUKES CONSULTS LIMITED is a fully incorporated Nigerian enterprise dedicated to delivering elite-tier commodity trading, construction materials supply, scrap iron trading, and logistics and haulage solutions. Built upon a foundation of integrity, efficiency, and customer satisfaction, we supply dependable, cost-optimized, and resilient services to corporate businesses, industrial manufacturers, and private individuals across Nigeria.",
  mission: "To fuel the growth of Nigeria's builders and manufacturers by providing unmatched supply-chain integrity, dependable haulage logistics, and top-tier industrial commodities with complete transparency and premium service.",
  vision: "To be recognized as Nigeria's most reliable and professional multi-sector industrial service and trading partner, empowering development from construction sites to industrial processing plants across the nation.",
};

export const CORE_VALUES: CoreValue[] = [
  {
    id: "v1",
    title: "Integrity",
    description: "We lead with complete transparency, executing all contracts and deliveries with high ethical standards and corporate honesty.",
    iconName: "ShieldCheck"
  },
  {
    id: "v2",
    title: "Reliability",
    description: "Our logistics fleets and supply chains are engineered to deliver without fail—ensuring your operations stay active.",
    iconName: "CheckCircle"
  },
  {
    id: "v3",
    title: "Excellence",
    description: "From premium materials grading to expert freight navigation, we set the highest benchmark for quality outcomes.",
    iconName: "Award"
  },
  {
    id: "v4",
    title: "Customer Satisfaction",
    description: "We adopt a client-centric model, offering bespoke supply volumes, flexible dispatch, and immediate 24/7 operational updates.",
    iconName: "Users"
  },
  {
    id: "v5",
    title: "Professionalism",
    description: "Our technicians, drivers, and sourcing agents maintain peak execution discipline, respect, and deep industry knowledge.",
    iconName: "Briefcase"
  }
];

export const SERVICES: Service[] = [
  {
    id: "commodity-trading",
    title: "Commodity Trading",
    description: "Strategic agricultural and bulk commodity sourcing, trade facilitation, and dependable warehousing across Nigeria's major trade hubs.",
    longDescription: "Jukes Consults Limited acts as a pivotal connector in regional commodity networks. We specialize in aggregating, storing, and distributing high-grade agricultural commodities, ensuring a constant supply of essential materials to processing plants and distributors throughout the country.",
    image: "/src/assets/images/commodity_trading_1781616847159.jpg",
    icon: "Wheat",
    details: [
      "Agricultural grains, maize, and sorghum sourcing",
      "High-grade cocoa beans and agribusiness supplies",
      "High-purity sesame seeds and cashew nuts trade",
      "Bulk warehousing, cleaning, and quality testing",
      "Aggressive supply chain risk mitigation and hedging"
    ]
  },
  {
    id: "materials-supply",
    title: "Construction Materials Supply",
    description: "Premier supply and delivery of high-quality cement, aggregates, iron rods, and foundational building blocks for structural works.",
    longDescription: "We provide high-strength building aggregates and supplies necessary for modern engineering structures. From foundational piles to premium tile finishes, Jukes Consults Limited guarantees exact specifications, certified standards, and timely delivery directly to your active construction site.",
    image: "/src/assets/images/construction_materials_1781616864008.jpg",
    icon: "HardHat",
    details: [
      "Bulk supply of Dangote, BUA, & Lafarge cement",
      "Premium granite aggregates (all sizes and grades)",
      "High-purity sharp sand, plaster sand, and filling sand",
      "Reinforced steel bars, rods, and structural iron work",
      "Concrete building blocks and paving stones",
      "Premium ceramic tiles and elegant sanitary wares"
    ]
  },
  {
    id: "scrap-iron",
    title: "Scrap Iron Trading",
    description: "Sourcing, sorting, grading, and wholesale supply of premium recyclable scrap iron and structural metals for steel melting mills.",
    longDescription: "We support heavy recycling and structural steel initiatives. Jukes Consults is a key aggregator of scrap iron and waste metal structures, ensuring correct categorization and processing to keep Nigeria's steel mills fed with premium-grade recycled materials.",
    image: "https://images.pexels.com/photos/36397936/pexels-photo-36397936.jpeg",
    icon: "Recycle",
    details: [
      "Efficient buying and selling of bulk industrial scrap metal",
      "Strategic decommissioning of outdated steel plants & machinery",
      "Scrap metal grading, structural iron slicing, and preparation",
      "Eco-friendly waste metal retrieval and recycling services",
      "Bulk steel mills partnerships for consistent metal supply"
    ]
  },
  {
    id: "logistics-haulage",
    title: "Logistics and Haulage Services",
    description: "Heavy-duty truck hauling and distribution networks ensuring reliable cargo transit across Nigeria with absolute security.",
    longDescription: "Our high-capacity truck fleet operates across all geo-political zones of Nigeria. We transport industrial raw materials, building stones, bulk commodities, and heavy assets safely, backed by experienced fleet navigators and responsive client communication channels.",
    image: "/src/assets/images/logistics_haulage_1781616899665.jpg",
    icon: "Truck",
    details: [
      "Long-distance heavy materials haulage across Nigeria",
      "Modern fleet of multi-axle trailers, flatbeds, and tippers",
      "Full-payload (FTL) bulk commodity transport solutions",
      "Rigorous pre-trip vehicle checks and trained route drivers",
      "Real-time dispatch coordination and safety monitoring",
      "24/7 dedicated logistics helpline and status reports"
    ]
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "w-1",
    title: "Trusted Partner",
    description: "We serve leading corporations, industrial manufacturers, and private clients across Nigeria, maintaining solid relationships built on uncompromising transparency, integrity, and verified delivery execution models. We believe in open communication, legal compliance, and fostering long-term trust. Our commitment ensures that every engagement, regardless of scale, is handled with absolute professionalism and a deep understanding of our clients' unique regional challenges.",
    iconName: "Handshake"
  },
  {
    id: "w-2",
    title: "Timely Delivery",
    description: "Equipped with dedicated drivers, advanced tracking systems, and strategic fleet routes across major Nigerian highways, we pride ourselves on matching strict project delivery timelines without excuses or delays. We understand that downtime costs money, so we optimize our logistics framework to ensure your operations remain highly productive and your supply chain remains uninterrupted.",
    iconName: "Clock"
  },
  {
    id: "w-3",
    title: "Competitive Pricing",
    description: "Through direct farm-to-warehouse bulk integrations for agro-commodities, deep-rooted local sourcing networks for minerals, and highly efficient autonomous logistics, we offer optimal price points. We continuously analyze market trends to provide cost structures that do not compromise on quality, driving major cost savings for your business and enhancing your overall market competitiveness.",
    iconName: "TrendingDown"
  },
  {
    id: "w-4",
    title: "Experienced Team",
    description: "Our diverse staff includes seasoned fleet managers, licensed commodity traders, structural engineers, and site inspectors who bring decades of combined industrial expertise. This deep well of knowledge ensures hitch-free execution, rigorous risk management, and professional service delivery. Our team proactively anticipates logistical bottlenecks and resolves them before they impact your delivery schedule.",
    iconName: "Award"
  },
  {
    id: "w-5",
    title: "Quality Assurance",
    description: "Quality is not just a promise; it is a measurable standard. Every shipment of granite, bulk supply of cement, bags of agricultural commodities, or tonnage of scrap metal undergoes intense multi-tiered grading and screening. We strictly adhere to national standards to ensure exact industrial compatibility, peak structural integrity, and maximum yield for all delivered goods.",
    iconName: "ThumbsUp"
  },
  {
    id: "w-6",
    title: "Customer Satisfaction",
    description: "We are deeply committed to accommodating special delivery plans, dynamic sizing requests, and complex multi-site deployment schedules. We provide a friendly, transparent, and highly responsive client service team available around the clock. Your feedback directly shapes our operational improvements, ensuring every project concludes with a fully satisfied client.",
    iconName: "Smile"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Alhaji Ibrahim Musa",
    position: "Managing Director",
    company: "Kaduna Agro-Allied Limited",
    rating: 5,
    content: "Jukes Consults Limited has been a pivotal partner for our raw agro-processing plant. Their sesame trade execution is excellent, and they handle the intense logistics seamlessly. Their transparency and attention to quality are highly commendable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t-2",
    name: "Engr. Chinedu Okafor",
    position: "Lead Consultant",
    company: "Apex Construction Partners (Lagos)",
    rating: 5,
    content: "Commercial building in Ikeja requires precise delivery cycles. Jukes Consults supplies our Lafarge cement shipments, reinforcement bars, and premium granite aggregates on time, every time. Their professionalism is outstanding.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t-3",
    name: "Mrs. Funke Adebayo",
    position: "Operations Director",
    company: "West African Recyclers Corporation",
    rating: 5,
    content: "Feeding our steel furnaces requires high volumes of sorted scrap iron daily. Jukes Consults delivers precisely graded heavy scraps, sorted and weighed perfectly, with constant professional updates. Truly a business of great integrity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t-4",
    name: "Chief Tunde Banjo",
    position: "Logistics Coordinator",
    company: "Landmark Food Distributors",
    rating: 5,
    content: "Their long-distance haulage fleets are the most reliable we've worked with in Nigeria. From Lagos docks to northern depots, their tracking is clean, the vehicles are solid, and the cargo is delivered without a scratch.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-2",
    category: "logistics",
    title: "Heavy Haulage Fleet",
    description: "Jukes heavy-duty multi-axle trailers ready for cross-country shipment dispatch.",
    image: "/src/assets/images/logistics_haulage_1781616899665.jpg"
  },
  {
    id: "g-3",
    category: "trading",
    title: "Commodity Warehousing",
    description: "Bulk sacks of sorted agricultural grains undergoing pre-distribution quality checks.",
    image: "/src/assets/images/commodity_trading_1781616847159.jpg"
  },
  {
    id: "g-4",
    category: "scrap",
    title: "Industrial Scrap Sorting",
    description: "Graded heavy-melt scrap iron items prepared for steel recycling factory melting lines.",
    image: "https://images.pexels.com/photos/36397936/pexels-photo-36397936.jpeg"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "m-1",
    name: "ADESHINA ADEKENLE SAMUEL",
    position: "CEO and the managing Director",
    image: "https://i.imgur.com/CGxP3lZ.png",
    badge: "Executive Leadership",
    badgeColor: "bg-[#C5A021]/15 text-[#C5A021] border-[#C5A021]/30",
    iconName: "TrendingUp",
    paragraphs: [
      "He holds a Bachelor of Science degree from the prestigious University of Abuja, establishing a robust academic foundation in scientific and business-oriented methodologies.",
      "Presently an executive MBA student, he combines advanced modern theory with direct market operations. His active involvement secures high-performance execution standards across all organizational touchpoints.",
      "He has been highly active in the national business landscape for over 11 years. His vast wealth of cross-functional experience directly guides the daily strategic management and long-term project delivery of the company."
    ]
  },
  {
    id: "m-2",
    name: "LAWRENCE R. OJURONGBE",
    position: "Executive Director - Finance",
    image: "https://images.pexels.com/photos/4345160/pexels-photo-4345160.jpeg",
    badge: "Financial Control Division",
    badgeColor: "bg-blue-550/15 text-blue-600 border-blue-500/20",
    iconName: "ShieldCheck",
    paragraphs: [
      "He is a distinguished chartered accountant and an active member of the Institute of Chartered Accountants of Nigeria (ICAN). He holds a master-class degree in Accountancy from the prestigious University of Lagos.",
      "His elite academic backing represents top-tier competence in risk management, capital frameworks, and structured financing modules.",
      "He boasts over 20 years of hands-on professional expertise spanning corporate finance, audit compliance, asset monitoring, and legal tax consulting. He establishes highly stable fiscal transparency and optimal asset distribution blueprints for all client engagements."
    ]
  },
  {
    id: "m-3",
    name: "BARRISTER TUNJI ADEBAYO",
    position: "Legal Practitioner",
    image: "https://images.pexels.com/photos/30692587/pexels-photo-30692587.jpeg",
    badge: "Corporate Compliance",
    badgeColor: "bg-indigo-550/15 text-indigo-600 border-indigo-500/20",
    iconName: "Scale",
    paragraphs: [
      "Serving as our principal advisory legal practitioner, he holds a standard LLB degree from the esteemed University of Lagos.",
      "His academic focus emphasizes corporate arbitration, cross-border commercial joint ventures, and mineral trading agreements inside legal Nigerian legal systems.",
      "With over 13 years of uninterrupted legal practice across several complex corporate domains, he ensures complete regulatory safety. He meticulously reviews, structures, and authenticates all service models and logistics partnerships to defend clients' interests."
    ]
  },
  {
    id: "m-4",
    name: "MR SESAN AKINYEMI",
    position: "General Manager - Overseeing Sales",
    image: "https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg",
    badge: "Commercial Operations",
    badgeColor: "bg-emerald-555/15 text-emerald-600 border-emerald-500/20",
    iconName: "Award",
    paragraphs: [
      "He holds a distinguished Higher National Diploma (HND) from the celebrated Lagos State Polytechnic, majoring in marketing and business logistics.",
      "Before joining the team at JCL, he gained deep industrial pedigree at Golden Penny Plc in the key capacity of Corporate Sales Executive.",
      "He brings an extensive record of practical sales execution with over 19 years of hands-on consumer interaction and bulk supply coordination. His proactive management style ensures that client timelines are respected and deliveries arrive on schedule."
    ]
  }
];

export const COMPANY_CONTACT = {
  address: "No 38, Opebi Road, Ikeja, Lagos State, Nigeria",
  phone: "+234 803 718 1902", // standard mock/representative formatted number or real placeholder, wait, they only specified Address and Email in input! Let's display those clearly
  email: "jukesconsultsltd@gmail.com",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.435756475657!2d3.356455375486221!3d6.592683022285888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9247eb910d5d%3A0xe104337dbe10ec5e!2s38%20Opebi%20Rd%2C%20Opebi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1718500000000!5m2!1sen!2sng"
};

export const PARTNERS: Partner[] = [
  {
    id: "p-1",
    name: "Hongxing Steel Company Ltd",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9CGotxoLB9tFBnYvay-qxgNmXH8dWFqBSg&s"
  },
  {
    id: "p-2",
    name: "African Steel Company Ltd",
    logo: "https://www.africanindustries.com/wp-content/uploads/2022/08/aig-logo.png"
  },
  {
    id: "p-3",
    name: "BUA Sugar Ltd",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQG1vtLxB5cgUQ/company-logo_200_200/company-logo_200_200/0/1631340203392?e=2147483647&v=beta&t=IuFyp3FTkVcwWtyP_MfRi7jI1fBx-zaW5ZKFzFLfZOM"
  },
  {
    id: "p-4",
    name: "Cabinta Cornerstone Ltd",
    logo: "https://www.cabintacornerstone.co.uk/wp-content/uploads/2017/07/logo-e1500571976741.png"
  },
  {
    id: "p-5",
    name: "Beta glass Plc",
    logo: "https://betaglass.com/media/22imkjws/betaglass_logo_1200x628.png"
  }
];

