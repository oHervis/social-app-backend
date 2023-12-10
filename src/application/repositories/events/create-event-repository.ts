import { Event } from "../../../domain/event/Event";

export interface CreateEventRepository {
  execute(event: Event): Promise<{ id: string }>;
}
