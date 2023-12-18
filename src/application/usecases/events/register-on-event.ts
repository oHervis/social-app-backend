import { EventParticipant } from "../../../domain/event/EventParticipant";

export class RegisterOnEvent {
  async execute(
    participant: EventParticipant,
    eventId: string
  ): Promise<string> {
    return eventId;
  }
}
