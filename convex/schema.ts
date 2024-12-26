// define database tables and types for them
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // helper that defines type in typescript and validates

export default defineSchema({
  users: defineTable({
    username: v.string(),
    image: v.string(),
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),
  messages: defineTable({
    sender: v.string(),
    content: v.string(),
  }),
});
