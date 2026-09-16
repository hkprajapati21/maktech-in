export const blogPosts = [
  {
    slug: "solar-energy-for-your-home",
    title: "Unlocking The Potential Of Solar Energy For Your Home",
    excerpt:
      "A rooftop solar system designed for your home can cut electricity bills by up to 90%. Learn how free site surveys, subsidies, and net metering make going solar simple for Indian households.",
    image: "/images/home-one/blog/blog-india-1.jpg",
    thumb: "/images/home-one/blog/blog-india-1.jpg",
    date: "07 April 2026",
    dateShort: "07 April",
    category: "Residential Solar",
    author: "The Mechtech Solutions",
    content: [
      "Your electricity bill does not have to keep rising every month. With a rooftop solar system designed for your home, you can generate your own power, reduce dependence on the grid, and see real savings from the first month. Whether you live in a bungalow, row house, or apartment, the right design fits your roof, consumption, and budget.",
      "We handle site survey, system design, government subsidy paperwork, installation, net metering, and after-sales AMC. One team. Complete solution. No running around to multiple agencies.",
    ],
    quote: {
      text: "Solar is not just a product - it is a long-term investment that can power your home for the next 25 years.",
      author: "The Mechtech Solutions",
    },
    highlight: {
      image: "/images/home-one/blog/blog-india-3.jpg",
      title: "Key benefits for homeowners",
      text: "Up to 90% bill reduction, free site assessment, certified installation, remote monitoring, and dedicated AMC support. Our engineers give honest numbers for expected generation, payback period, and ROI before you invest.",
    },
    closing:
      "Under schemes like PM Surya Ghar, eligible homeowners can access subsidies that lower upfront cost. With net metering, excess power can be sold back to the grid. Add transparent pricing and a 25-year panel warranty, and going solar becomes a practical decision - not a risky experiment.",
  },
  {
    slug: "solar-energy-for-businesses",
    title: "Exploring The Benefit Of Solar Energy For Businesses",
    excerpt:
      "High electricity costs eat into factory and office margins. Commercial and industrial solar plants deliver faster ROI with accelerated depreciation, O&M support, and transparent EPC delivery.",
    image: "/images/home-one/blog/blog-india-2.jpg",
    thumb: "/images/home-one/blog/blog-india-2.jpg",
    date: "12 April 2026",
    dateShort: "12 April",
    category: "Commercial Solar",
    author: "The Mechtech Solutions",
    content: [
      "Factories, warehouses, hotels, and office campuses run on heavy daytime loads - exactly when solar performs best. A well-designed C&I plant can offset a large share of grid consumption, improve ESG reporting, and protect margins against rising tariffs.",
      "We deliver load analysis, structural review, equipment selection, installation, and long-term O&M. Our EPC team coordinates DISCOM approvals, net metering, and commissioning so your operations stay uninterrupted.",
    ],
    quote: {
      text: "Commercial solar is not an expense line - it is a strategic asset that lowers operating cost for decades.",
      author: "The Mechtech Solutions",
    },
    highlight: {
      image: "/images/home-one/blog/blog-india-1.jpg",
      title: "Why businesses choose solar now",
      text: "Accelerated depreciation, lower per-unit energy cost, predictable generation, and AMC-backed performance monitoring help finance and operations teams plan with confidence.",
    },
    closing:
      "Whether you need a 50 kW rooftop or a multi-MW ground-mount system, transparent BOQ, honest generation estimates, and disciplined project execution matter more than brochure promises.",
  },
  {
    slug: "solar-financing-guide",
    title: "Go Solar Without Heavy Upfront Cost: Financing Guide",
    excerpt:
      "Solar loans, PM Surya Ghar subsidy, and EMI options through banks and NBFCs help homeowners and SMEs start generating clean power today and pay from the savings they create.",
    image: "/images/home-one/blog/blog-india-3.jpg",
    thumb: "/images/home-one/blog/blog-india-3.jpg",
    date: "18 April 2026",
    dateShort: "18 April",
    category: "Solar Financing",
    author: "The Mechtech Solutions",
    content: [
      "Upfront cost is the biggest reason people delay solar. In reality, multiple financing routes now make adoption easier for homes and small businesses - from subsidized residential programs to structured loans for commercial projects.",
      "Our team helps you compare subsidy eligibility, loan tenure, EMI impact, and expected savings so you choose a plan that fits cash flow instead of stretching budget blindly.",
    ],
    quote: {
      text: "The best financing plan is the one where your monthly savings from solar comfortably cover your EMI.",
      author: "The Mechtech Solutions",
    },
    highlight: {
      image: "/images/home-one/blog/blog-india-2.jpg",
      title: "Popular financing options",
      text: "PM Surya Ghar subsidy for eligible homes, bank and NBFC solar loans, developer-led EMI models, and commercial capex with accelerated depreciation benefits for businesses.",
    },
    closing:
      "Start with a free site survey and bill analysis. Once generation and savings are clear, financing becomes a numbers decision - not a guess.",
  },
];

export const getBlogBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (slug, limit = 3) =>
  blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
