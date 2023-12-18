import { Event } from "../../../domain/event/Event";

export interface GetEventRepository {
  getEventById(eventId: string): Promise<Event>;
}
