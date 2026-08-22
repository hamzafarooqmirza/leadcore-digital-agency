export const site = {
  name: "LeadCore Digital",
  tagline: "Your Growth Partner In Digital Marketing",
  phone: "+92 333 5858774",
  phoneRaw: "+923335858774",
  whatsapp: "923335858774",
  email: "leadcoredigitalpk@gmail.com",
  location: "Pakistan",
};

export const whatsappUrl = (msg = "Hi LeadCore Digital, I'd like a free consultation.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    slug: "google-ads-management",
    title: "Google Ads Management",
    short: "ROI-focused Google Search, Display & PMax campaigns.",
  },
  {
    slug: "google-my-business-optimization",
    title: "Google My Business Optimization",
    short: "Rank higher in local map results and drive calls.",
  },
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    short: "Premium, conversion-focused websites that sell.",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    short: "Climb Google rankings with proven SEO frameworks.",
  },
  {
    slug: "facebook-ads-management",
    title: "Facebook Ads Management",
    short: "Scale leads & sales with Meta Ads precision targeting.",
  },
  {
    slug: "instagram-ads-management",
    title: "Instagram Ads Management",
    short: "Beautiful creatives, sharp targeting, real results.",
  },
  {
    slug: "youtube-ads-management",
    title: "YouTube Ads Management",
    short: "Video ads that build brand & generate demand.",
  },
  {
    slug: "ppc-management",
    title: "PPC Management",
    short: "End-to-end paid media management across networks.",
  },
  {
    slug: "google-conversion-tracking",
    title: "Google Conversion Tracking",
    short: "Track every lead, call and sale with precision.",
  },
  {
    slug: "performance-max-campaigns",
    title: "Performance Max Campaigns",
    short: "Google's AI-powered cross-channel conversion engine.",
  },
  {
    slug: "shopping-ads-management",
    title: "Shopping Ads Management",
    short: "Profitable Google Shopping for ecommerce stores.",
  },
  {
    slug: "lead-generation-campaigns",
    title: "Lead Generation Campaigns",
    short: "High-intent leads delivered straight to your inbox.",
  },
  {
    slug: "call-generation-campaigns",
    title: "Call Generation Campaigns",
    short: "Ring your phone with ready-to-buy customers.",
  },
  {
    slug: "google-ads-suspended-account-recovery",
    title: "Google Ads Suspended Account Recovery",
    short: "Reinstate suspended ad accounts — fast.",
  },
];

export const industries = [
  "Cleaning Companies",
  "Car Recovery",
  "Chauffeurs Service",
  "Mobile Tyre Fitting",
  "Construction Companies",
  "Real Estate Agencies",
  "AC Repair",
  "Auto Repair",
  "E-commerce Stores",
  "Healthcare Businesses",
  "Local Service Businesses",
  "Small & Medium Businesses",
];
