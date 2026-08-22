import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "@/lib/site";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get details for a single LeadCore Digital service by its slug (e.g. 'google-ads-management', 'seo', 'facebook-ads-management').",
  inputSchema: {
    slug: z.string().min(1).describe("The service slug, e.g. 'google-ads-management'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const svc = services.find((s) => s.slug === slug);
    if (!svc) {
      return {
        content: [
          {
            type: "text",
            text: `No service found with slug "${slug}". Use list_services to see available slugs.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(svc, null, 2) }],
      structuredContent: { service: svc },
    };
  },
});
