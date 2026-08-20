import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "@/lib/projects";

export default defineTool({
  name: "list_projects",
  title: "List client projects",
  description:
    "List LeadCore Digital's client project case studies with title, category, market, description, tags, and key performance metrics (conversions, impressions, CPC, spend).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = projects.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      market: p.market,
      tags: p.tags,
      description: p.description,
      metrics: p.metrics,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { projects: summary },
    };
  },
});
