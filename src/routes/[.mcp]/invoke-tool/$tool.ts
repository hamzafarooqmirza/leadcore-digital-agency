import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/.mcp/invoke-tool/$tool")({
  server: {
    handlers: {
      ANY: () => new Response("Not found", { status: 404 }),
    },
  },
});
