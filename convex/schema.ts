// define database tables and types for them
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // helper that defines type in typescript and validates

export default defineSchema({
  messages: defineTable({
    sender: v.string(),
    content: v.string(),
  }),
});
