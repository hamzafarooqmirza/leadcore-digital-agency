import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import listProjectsTool from "./tools/list-projects";
import getAgencyInfoTool from "./tools/get-agency-info";

export default defineMcp({
  name: "leadcore-digital-mcp",
  title: "LeadCore Digital",
  version: "0.1.0",
  instructions:
    "Public tools for LeadCore Digital, a digital marketing agency. Use these to look up the agency's services, individual service details, client case studies with performance metrics, contact info, and industries served.",
  tools: [listServicesTool, getServiceTool, listProjectsTool, getAgencyInfoTool],
});
