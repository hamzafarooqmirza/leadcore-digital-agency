import s164 from "@/assets/results/164_calls_single_day.png.asset.json";
import s132 from "@/assets/results/132_budget_89calls.png.asset.json";
import s71 from "@/assets/results/71calls_345gbp.png.asset.json";
import s28 from "@/assets/results/28calls_just30gbp.png.asset.json";
import s22 from "@/assets/results/22_calls.png.asset.json";
import s18a from "@/assets/results/18_calls_88gbp.png.asset.json";
import s18b from "@/assets/results/18_clicks_18_calls.png.asset.json";
import s13 from "@/assets/results/13_clicks_13call_14pounds.png.asset.json";
import gpt1 from "@/assets/results/ChatGPT_Image_Jun_1_2026_03_23_16_PM.png.asset.json";
import gpt2 from "@/assets/results/ChatGPT_Image_May_24_2026_12_28_32_AM.png.asset.json";

export type ResultItem = {
  src: string;
  headline: string;
  metric: string;
  description: string;
  tags: string[];
};

export const adsResults: ResultItem[] = [
  {
    src: s164.url,
    headline: "164 Phone Calls In A Single Day",
    metric: "164 Calls",
    description:
      "Massive spike in call volume from a single day of optimized Google Ads — 21,204 impressions at just £1.20 avg CPC.",
    tags: ["Google Ads", "Call Campaign", "UK"],
  },
  {
    src: s132.url,
    headline: "89 Calls On Just £131 Budget",
    metric: "89 Calls",
    description:
      "High-efficiency call campaign delivering 89 qualified phone calls at £0.52 avg CPC across 26 days.",
    tags: ["Lead Gen", "Call Ads", "Low CPC"],
  },
  {
    src: s71.url,
    headline: "71 Phone Calls In One Week",
    metric: "71 Calls / £345",
    description:
      "Performance Max + smart bidding delivered 71 calls in a single week at predictable cost per lead.",
    tags: ["Performance Max", "Lead Gen"],
  },
  {
    src: s28.url,
    headline: "28 Calls For Only £30.82",
    metric: "28 Calls / £30",
    description:
      "Ultra-low spend campaign tuned for maximum call conversions — every pound producing measurable leads.",
    tags: ["Budget Friendly", "Call Generation"],
  },
  {
    src: s22.url,
    headline: "22 Calls From Tight Targeting",
    metric: "22 Calls",
    description:
      "Geo-targeted call-only campaign converting at outstanding efficiency for a local service business.",
    tags: ["Local Services", "Geo Targeting"],
  },
  {
    src: s18a.url,
    headline: "18 Calls At Just £88 Spend",
    metric: "18 Calls / £88",
    description:
      "Optimized search campaign producing 18 high-intent phone calls at industry-leading cost per call.",
    tags: ["Google Ads", "Search"],
  },
  {
    src: s18b.url,
    headline: "100% Click-To-Call Conversion",
    metric: "18 Clicks · 18 Calls",
    description:
      "Every single click converted into a phone call — landing experience + call extensions firing perfectly.",
    tags: ["CTR", "Conversion Tracking"],
  },
  {
    src: s13.url,
    headline: "13 Calls From 13 Clicks · £14.77",
    metric: "13 Calls / £14",
    description:
      "Razor-sharp call-only campaign — full click-to-call conversion at under £1.15 per qualified lead.",
    tags: ["Call-Only Ads", "High Intent"],
  },
];

export const dashboardScreens = [gpt1.url, gpt2.url];
