import { Event } from "../../../domain/event/Event";

export interface EventRepository {
  createEvent(event: Event): Promise<{ id: string }>;
  getEventById(id: string): Promise<Event>;
  getEvents(): Promise<Event[]>;
  updateEvent(event: Event): Promise<void>;
  deleteEvent(id: string): Promise<void>;
}
