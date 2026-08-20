import p1 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.55_PM.jpeg.asset.json";
import p2 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.55_PM_1.jpeg.asset.json";
import p3 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.56_PM.jpeg.asset.json";
import p4 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.56_PM_1.jpeg.asset.json";
import p5 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.56_PM_2.jpeg.asset.json";
import p6 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.57_PM_1.jpeg.asset.json";
import p7 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.58_PM.jpeg.asset.json";
import p8 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.58_PM_1.jpeg.asset.json";
import p9 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.58_PM_2.jpeg.asset.json";
import p10 from "@/assets/projects/WhatsApp_Image_2026-07-24_at_4.35.58_PM_3.jpeg.asset.json";

export type ProjectItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  market: string;
  tags: string[];
  metrics: { label: string; value: string }[];
};

export const projects: ProjectItem[] = [
  {
    id: "gads-53-conversions-jul18",
    image: p1.url,
    title: "Google Ads Scale-Up Delivering 53 Conversions In A Single Day",
    description:
      "Full-funnel Google Ads management for a UK service brand — a single-day snapshot recorded 1.95K impressions, 53 conversions and an average CPC of £1.47 on £286 spend. Smart bidding and tightly grouped keyword themes kept cost per acquisition low while sustaining a healthy conversion pace.",
    category: "Google Ads Management",
    market: "United Kingdom",
    tags: ["Google Ads", "Smart Bidding", "Search"],
    metrics: [
      { label: "Conversions", value: "53" },
      { label: "Impressions", value: "1.95K" },
      { label: "Avg. CPC", value: "£1.47" },
      { label: "Spend", value: "£286" },
    ],
  },
  {
    id: "gads-62-conversions-jul17",
    image: p2.url,
    title: "High-Intent Search Campaign Producing 62 Daily Conversions",
    description:
      "Restructured search campaign generating 62 conversions in a single day from 2.49K impressions at £1.49 average CPC on £319 spend. Query mining, negative keyword sculpting and audience layering kept traffic quality high and pushed conversion rate well above account baseline.",
    category: "Google Ads Management",
    market: "United Kingdom",
    tags: ["Search Ads", "Conversion Optimisation", "Lead Gen"],
    metrics: [
      { label: "Conversions", value: "62" },
      { label: "Impressions", value: "2.49K" },
      { label: "Avg. CPC", value: "£1.49" },
      { label: "Spend", value: "£319" },
    ],
  },
  {
    id: "gads-471-conversions-week",
    image: p3.url,
    title: "471 Conversions In 7 Days From A Rebuilt Google Ads Account",
    description:
      "Weekly performance snapshot for a UK client following a full account rebuild — 471 conversions, 18.1K impressions and an average CPC of £1.54 on £2.46K spend. Campaign restructuring and enhanced conversion tracking unlocked a step-change in weekly volume and stability.",
    category: "PPC Management",
    market: "United Kingdom",
    tags: ["PPC", "Account Restructure", "Scaling"],
    metrics: [
      { label: "Conversions", value: "471" },
      { label: "Impressions", value: "18.1K" },
      { label: "Avg. CPC", value: "£1.54" },
      { label: "Spend", value: "£2.46K" },
    ],
  },
  {
    id: "call-25-day-jul23",
    image: p4.url,
    title: "Call-Only Campaign Driving 25 Qualified Phone Calls In A Day",
    description:
      "Call-generation campaign built for a service business needing the phone to ring — 25 phone calls in a single day from 3.14K impressions at £3.31 average CPC. Call extensions, business-hours scheduling and mobile-first bidding kept every lead ready to buy.",
    category: "Call Generation Campaigns",
    market: "United Kingdom",
    tags: ["Call Ads", "Local Services", "Mobile"],
    metrics: [
      { label: "Phone Calls", value: "25" },
      { label: "Impressions", value: "3.14K" },
      { label: "Avg. CPC", value: "£3.31" },
    ],
  },
  {
    id: "gads-29-conversions-jun16",
    image: p5.url,
    title: "Precision Search Ads Yielding 29 Conversions From 121 Clicks",
    description:
      "Tight, high-intent search campaign converting 29 leads from just 121 clicks — a strong 24% conversion rate on 1.17K impressions at £3.04 average CPC. Landing-page alignment and match-type discipline delivered exceptional efficiency for a competitive UK vertical.",
    category: "Google Ads Management",
    market: "United Kingdom",
    tags: ["Search Ads", "CRO", "High Intent"],
    metrics: [
      { label: "Conversions", value: "29" },
      { label: "Clicks", value: "121" },
      { label: "Impressions", value: "1.17K" },
      { label: "Avg. CPC", value: "£3.04" },
    ],
  },
  {
    id: "gads-51-conversions-jul3",
    image: p6.url,
    title: "Optimised Lead-Gen Campaign Delivering 51 Conversions Daily",
    description:
      "Lead-generation focused Google Ads build for a UK service brand — 51 conversions in a single day from 2.04K impressions on £331 spend at £1.51 average CPC. Ongoing bid-strategy tuning and creative rotation kept cost per lead trending downward week over week.",
    category: "Lead Generation Campaigns",
    market: "United Kingdom",
    tags: ["Lead Gen", "Google Ads", "Bid Strategy"],
    metrics: [
      { label: "Conversions", value: "51" },
      { label: "Impressions", value: "2.04K" },
      { label: "Avg. CPC", value: "£1.51" },
      { label: "Spend", value: "£331" },
    ],
  },
  {
    id: "gads-49-conversions-jun25",
    image: p7.url,
    title: "Performance Max Campaign Hitting 49 Conversions From 139 Clicks",
    description:
      "Performance Max deployment across search, display and YouTube inventory — 49 conversions from 139 clicks and 1.37K impressions at £1.83 average CPC. Asset-group segmentation and signal-rich audiences powered a strong 35% conversion rate for the day.",
    category: "Performance Max Campaigns",
    market: "United Kingdom",
    tags: ["Performance Max", "Cross-Channel", "AI Bidding"],
    metrics: [
      { label: "Conversions", value: "49" },
      { label: "Clicks", value: "139" },
      { label: "Impressions", value: "1.37K" },
      { label: "Avg. CPC", value: "£1.83" },
    ],
  },
  {
    id: "gads-22-conversions-90gbp",
    image: p8.url,
    title: "Budget-Efficient Ads Producing 22 Conversions On £90 Spend",
    description:
      "Two-day custom-range report showing 22 conversions from 42 clicks and 979 impressions at just £90.01 total spend. A lean, hyper-focused campaign structure proves that with the right targeting and creative, small budgets can still generate a serious pipeline of leads.",
    category: "PPC Management",
    market: "United Kingdom",
    tags: ["Low Budget", "Efficiency", "Lead Gen"],
    metrics: [
      { label: "Conversions", value: "22" },
      { label: "Clicks", value: "42" },
      { label: "Impressions", value: "979" },
      { label: "Spend", value: "£90.01" },
    ],
  },
  {
    id: "gads-36-conversions-jul4",
    image: p9.url,
    title: "Search Ads Campaign Generating 36 Conversions At £1.51 CPC",
    description:
      "Daily performance capture from a mature Google Ads account — 36 conversions, 1.32K impressions and £186 spend at £1.51 average CPC. Consistent A/B ad testing and search-term audits keep the account compounding results month after month for the client.",
    category: "Google Ads Management",
    market: "United Kingdom",
    tags: ["Search Ads", "A/B Testing", "Optimisation"],
    metrics: [
      { label: "Conversions", value: "36" },
      { label: "Impressions", value: "1.32K" },
      { label: "Avg. CPC", value: "£1.51" },
      { label: "Spend", value: "£186" },
    ],
  },
  {
    id: "gads-20-conversions-jun15",
    image: p10.url,
    title: "Data-Driven Ads Converting 20 Leads From 76 Targeted Clicks",
    description:
      "Focused UK campaign producing 20 conversions from 76 clicks and 1.02K impressions at £2.50 average CPC — a 26% conversion rate driven by intent-matched keywords and refined ad copy. Conversion tracking gave clear visibility into which keywords actually produced revenue.",
    category: "Conversion Tracking",
    market: "United Kingdom",
    tags: ["Conversion Tracking", "Google Ads", "Analytics"],
    metrics: [
      { label: "Conversions", value: "20" },
      { label: "Clicks", value: "76" },
      { label: "Impressions", value: "1.02K" },
      { label: "Avg. CPC", value: "£2.50" },
    ],
  },
];
