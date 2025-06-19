import { collaborationRequests, type CollaborationRequest, type InsertCollaborationRequest } from "@shared/schema";

export interface IStorage {
  createCollaborationRequest(request: InsertCollaborationRequest): Promise<CollaborationRequest>;
  getCollaborationRequests(): Promise<CollaborationRequest[]>;
}

export class MemStorage implements IStorage {
  private requests: Map<number, CollaborationRequest>;
  private currentId: number;

  constructor() {
    this.requests = new Map();
    this.currentId = 1;
  }

  async createCollaborationRequest(insertRequest: InsertCollaborationRequest): Promise<CollaborationRequest> {
    const id = this.currentId++;
    const request: CollaborationRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
    };
    this.requests.set(id, request);
    return request;
  }

  async getCollaborationRequests(): Promise<CollaborationRequest[]> {
    return Array.from(this.requests.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export const storage = new MemStorage();
