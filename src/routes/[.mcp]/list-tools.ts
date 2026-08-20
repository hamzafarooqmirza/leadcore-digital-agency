import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/.mcp/list-tools")({
  server: {
    handlers: {
      ANY: () => new Response("Not found", { status: 404 }),
    },
  },
});
