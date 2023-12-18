import { Email } from "../value-objects/Email";
import { Name } from "../value-objects/Name";
import { Phone } from "../value-objects/Phone";

export class EventParticipant {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly image?: string;

  constructor(participantsData: EventParticipantInput) {
    this.name = new Name(participantsData.name).getValue();
    this.email = new Email(participantsData.email).getValue();
    this.phone = new Phone(participantsData.phone).getValue();
    this.image = participantsData.image;
  }
}

export interface EventParticipantInput {
  name: string;
  email: string;
  phone: string;
  image?: string;
}
