// src/inngest/functions.ts
import { Inngest } from "inngest";

// Step 1: Create the Inngest client
export const inngest = new Inngest({ id: "township-chatbot-directory" });

// Step 2: Hello World function triggered by `test/hello.world`
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);
