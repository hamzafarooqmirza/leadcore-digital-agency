import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "@/lib/site";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List all digital marketing services offered by LeadCore Digital (Google Ads, SEO, Facebook Ads, web design, lead generation, etc.) with each service's slug, title, and short description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});

export const _schema = z.object({}); // keep zod imported for future args
