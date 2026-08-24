




export const SITE = {
  name: 'Chandra Solar Systems',
  tagline: 'Power Your Home With Smart Solar Energy',
  description:
    'Premium residential and commercial solar installations in Vizianagaram, Andhra Pradesh. Government authorized installer for PM Surya Ghar Yojana.',
  url: 'https://chandrasolarsystems.in',
  phone: '+91 96035 65222',
  phoneRaw: '+919603565222',
  whatsapp: '+91 96035 65222',
  whatsappRaw: '919603565222',
  whatsappMessage:
    "Hi Chandra Solar Systems, I'm interested in a solar installation. Please share details.",
  email: 'info@chandrasolarsystems.in',
  address: {
    line1: 'Shop No. 4, Karthikeya Heights',
    line2: 'Landmark: Himagiri Sapthagiri Line',
    line3: 'SP Bangala Main Gate',
    city: 'Vizianagaram',
    state: 'Andhra Pradesh',
    pin: '535003',
    full: 'Shop No. 4, Karthikeya Heights, Himagiri Sapthagiri Line, SP Bangala Main Gate, Vizianagaram, Andhra Pradesh – 535003',
  },
  workingHours: {
    weekdays: 'Monday – Saturday',
    hours: '9:00 AM – 6:00 PM',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://facebook.com/chandrasolarsystems',
    instagram: 'https://instagram.com/chandrasolarsystems',
    youtube: 'https://youtube.com/@chandrasolarsystems',
    linkedin: 'https://linkedin.com/company/chandrasolarsystems',
  },
  mapEmbed:
    'https://maps.google.com/maps?q=Chandra+Computers+Sales+and+Services,+Vizianagaram&t=&z=17&ie=UTF8&iwloc=&output=embed',
} as const

export const NAV_LINKS = [
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Services', href: '#services' },
  { label: 'Subsidy', href: '#pm-surya-ghar' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Contact', href: '#contact' },
] as const

export const STATS = [
  { value: 500, suffix: '+', label: 'Happy Customers' },
  { value: 25, suffix: ' yrs', label: 'Panel Warranty' },
  { value: 78000, prefix: '₹', label: 'Max Govt. Subsidy', isCurrency: true },
  { value: 100, suffix: '%', label: 'Customer Satisfaction' },
] as const

export const BRANDS = [
  { name: 'Tata Power Solar', logo: 'tata' },
  { name: 'Adani Solar', logo: 'adani' },
  { name: 'Waaree Energies', logo: 'waaree' },
  { name: 'Vikram Solar', logo: 'vikram' },
  { name: 'Luminous Solar', logo: 'luminous' },
] as const

export const WHY_CHOOSE_FEATURES = [
  {
    id: 'subsidy',
    title: 'Government Subsidy',
    description: 'Get up to ₹78,000 in direct government subsidy under PM Surya Ghar Yojana. We handle all paperwork end-to-end.',
  },
  {
    id: 'panels',
    title: 'Tier-1 Premium Panels',
    description: 'We install only Tier-1 panels from Tata Power, Adani, and Waaree — offering maximum efficiency and certified quality.',
  },
  {
    id: 'warranty',
    title: '25-Year Warranty',
    description: 'Industry-leading 25-year performance warranty on solar panels and 10-year warranty on all balance of system components.',
  },
  {
    id: 'installation',
    title: 'Fast Installation',
    description: 'Typical installations completed in 3–5 days after approvals. Our trained team ensures zero damage to your roof.',
  },
  {
    id: 'net-metering',
    title: 'Net Metering Support',
    description: 'Sell your excess power back to the grid and earn credits. We handle complete DISCOM net metering registration.',
  },
  {
    id: 'amc',
    title: 'AMC & Service Support',
    description: 'Annual Maintenance Contracts available with priority support, regular cleaning, performance monitoring, and quick repairs.',
  },
] as const

export const SERVICES = [
  {
    id: 'residential',
    title: 'Residential Solar',
    description: 'Turn your rooftop into a power plant. Custom-designed systems for Indian homes — from 1kW to 10kW and beyond.',
    size: '1kW – 10kW',
  },
  {
    id: 'commercial',
    title: 'Commercial Solar',
    description: 'Reduce operating costs significantly with large-scale commercial solar installations for offices, factories, and institutions.',
    size: '10kW – 500kW',
  },
  {
    id: 'on-grid',
    title: 'On-Grid Systems',
    description: 'Grid-tied solar systems that maximize savings through net metering. Ideal when reliable grid power is available.',
    size: 'All sizes',
  },
  {
    id: 'off-grid',
    title: 'Off-Grid Systems',
    description: 'Complete energy independence with battery storage. Perfect for remote locations or areas with unreliable power supply.',
    size: '1kW – 50kW',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Systems',
    description: 'Best of both worlds — connected to grid with battery backup. Never lose power even during grid outages.',
    size: '3kW – 100kW',
  },
] as const

export const INSTALLATION_STEPS = [
  {
    step: '01',
    title: 'Site Survey',
    description: 'Our engineers visit your property to assess roof structure, shading, orientation, and load requirements.',
    duration: 'Day 1',
  },
  {
    step: '02',
    title: 'System Design',
    description: 'We create a custom solar layout using 3D modeling software, optimized for maximum energy generation.',
    duration: 'Day 2–3',
  },
  {
    step: '03',
    title: 'Approvals',
    description: 'We submit all documentation to DISCOM and government portals for subsidy approval and net metering.',
    duration: 'Week 1–2',
  },
  {
    step: '04',
    title: 'Installation',
    description: 'Our certified team installs panels, inverter, wiring, and mounting structures with premium craftsmanship.',
    duration: '3–5 days',
  },
  {
    step: '05',
    title: 'Inspection',
    description: 'DISCOM inspection and safety certification. Your system is tested for performance before handover.',
    duration: 'Week 3',
  },
  {
    step: '06',
    title: 'Go Live',
    description: 'Your solar system goes live! We walk you through monitoring, maintenance, and subsidy disbursement.',
    duration: 'Week 4',
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar Naidu',
    location: 'Vizianagaram',
    rating: 5,
    review:
      'Outstanding service from start to finish. My electricity bill dropped from ₹4,200 to under ₹300 after installation. The subsidy paperwork was handled completely by Chandra Solar — I didn\'t have to do anything.',
    savings: '₹3,900/month',
    system: '5kW On-Grid',
    avatar: 'RK',
  },
  {
    id: 2,
    name: 'Lakshmi Devi Prasad',
    location: 'Vizianagaram',
    rating: 5,
    review:
      'Excellent quality panels and very professional installation team. Got the government subsidy of ₹54,000 credited within 45 days. The team was clean, punctual and explained everything clearly.',
    savings: '₹2,800/month',
    system: '3kW On-Grid',
    avatar: 'LD',
  },
  {
    id: 3,
    name: 'Srinivas Rao',
    location: 'Bobbili',
    rating: 5,
    review:
      'I was skeptical at first but Chandra Solar built my trust. The 25-year warranty, Tata Power panels, and the transparent pricing made the decision easy. ROI in under 4 years is incredible.',
    savings: '₹5,100/month',
    system: '7kW Hybrid',
    avatar: 'SR',
  },
  {
    id: 4,
    name: 'Meena Kumari',
    location: 'Parvathipuram',
    rating: 5,
    review:
      'The team installed a 3kW system for our home within 4 days. Very tidy work, no roof damage at all. The solar monitoring app is great — I can see live power generation every minute.',
    savings: '₹2,200/month',
    system: '3kW On-Grid',
    avatar: 'MK',
  },
] as const

export const FAQ_ITEMS = [
  {
    id: 'q1',
    question: 'What is PM Surya Ghar Muft Bijli Yojana?',
    answer:
      'PM Surya Ghar Muft Bijli Yojana is a central government scheme launched in 2024 that provides direct subsidies to homeowners for rooftop solar installations. Eligible households can receive up to ₹78,000 as a one-time subsidy. Additionally, you get 300 units of free electricity every month through net metering.',
  },
  {
    id: 'q2',
    question: 'How much subsidy can I get under the scheme?',
    answer:
      'The subsidy structure is: ₹30,000/kW for up to 2kW systems, ₹18,000/kW for the third kW (up to 3kW total). Maximum subsidy is ₹78,000 for a 3kW system. For systems above 3kW, the subsidy is capped at ₹78,000. Commercial installations are not eligible for residential subsidy.',
  },
  {
    id: 'q3',
    question: 'What is the typical payback period for a solar system?',
    answer:
      'With the government subsidy, most residential solar systems have a payback period of 3–5 years. After that, you enjoy virtually free electricity for the remaining 20+ years of the panel\'s life. Higher your current electricity bill, faster the payback.',
  },
  {
    id: 'q4',
    question: 'Do I need to maintain my solar panels?',
    answer:
      'Solar panels require minimal maintenance. We recommend cleaning panels once every 2–3 months with water to remove dust and bird droppings. Our Annual Maintenance Contracts (AMC) include scheduled cleaning, performance checks, and priority repair services.',
  },
  {
    id: 'q5',
    question: 'How long does the installation take?',
    answer:
      'The physical installation typically takes 3–5 days. However, the complete process including site survey, system design, government approvals, and net metering connection usually takes 4–6 weeks. The subsidy is credited to your bank account within 30–60 days after installation and DISCOM approval.',
  },
  {
    id: 'q6',
    question: 'What happens during power outages with a solar system?',
    answer:
      'On-grid systems (most common) shut down during grid outages for safety reasons. If you want power during outages, a hybrid system with battery backup is the right choice. We can help you select the best system type based on your requirements and grid reliability in your area.',
  },
  {
    id: 'q7',
    question: 'Are the panels waterproof? Can they handle heavy rain?',
    answer:
      'Yes, all solar panels we install are IP65 or higher rated, meaning they are completely weatherproof. They are designed to withstand heavy rain, high winds (up to 150 km/h), hail, and extreme temperatures. The mounting structures are also engineered for Indian weather conditions.',
  },
  {
    id: 'q8',
    question: 'What brands of panels do you install?',
    answer:
      'We install only Tier-1 panels from trusted brands including Tata Power Solar, Adani Solar, Waaree Energies, Vikram Solar, and Luminous Solar. All panels come with 25-year performance warranty and 10-year product warranty from manufacturers.',
  },
] as const
