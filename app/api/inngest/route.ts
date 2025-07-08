// app/api/inngest/route.ts
import { serve } from "inngest/next";
import { inngest, helloWorld } from "@/src/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld],
});
