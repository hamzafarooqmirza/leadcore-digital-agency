import { defineTool } from "@lovable.dev/mcp-js";
import { industries, site, whatsappUrl } from "@/lib/site";

export default defineTool({
  name: "get_agency_info",
  title: "Get agency info",
  description:
    "Get LeadCore Digital's core agency information: name, tagline, contact channels (phone, WhatsApp, email), location, and the list of industries served.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: site.name,
      tagline: site.tagline,
      contact: {
        phone: site.phone,
        whatsapp: whatsappUrl(),
        email: site.email,
      },
      location: site.location,
      industries,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
