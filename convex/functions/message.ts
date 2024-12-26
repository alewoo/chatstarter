import { v } from "convex/values";
import { mutation, query } from "../_generated/server";

// query that will return all of our messages
// query is a function that fetches data
export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});

// mutation that will create a new message
// a function that modifies data
export const create = mutation({
  args: {
    sender: v.string(),
    content: v.string(),
  },
  handler: async (ctx, { sender, content }) => {
    await ctx.db.insert("messages", { sender, content });
  },
});
