import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const collaborationRequests = pgTable("collaboration_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  organization: text("organization"),
  collaborationType: text("collaboration_type").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCollaborationRequestSchema = createInsertSchema(collaborationRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertCollaborationRequest = z.infer<typeof insertCollaborationRequestSchema>;
export type CollaborationRequest = typeof collaborationRequests.$inferSelect;
