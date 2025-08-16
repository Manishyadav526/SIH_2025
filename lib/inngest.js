import Inngest from "inngest";

// Create the client
export const inngest = new Inngest({
  name: "AssetIQ App",
  apiKey: process.env.INNGEST_API_KEY, // optional if you have an API key
});
