import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mcp")({
  server: {
    handlers: {
      ANY: () => new Response("MCP is not available on this deployment.", { status: 404 }),
    },
  },
});
