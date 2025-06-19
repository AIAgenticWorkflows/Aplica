import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCollaborationRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Collaboration request endpoint
  app.post("/api/collaborate", async (req, res) => {
    try {
      const validatedData = insertCollaborationRequestSchema.parse(req.body);
      const request = await storage.createCollaborationRequest(validatedData);
      res.json({ success: true, id: request.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get collaboration requests (for admin purposes if needed)
  app.get("/api/collaborate", async (req, res) => {
    try {
      const requests = await storage.getCollaborationRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
