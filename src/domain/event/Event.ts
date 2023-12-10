import { EventDescription } from "./value-objects/EventDescription";
import { EventImage } from "./value-objects/EventImage";
import { Organizer, OrganizerData } from "./Organizer";
import { EventPrice } from "./value-objects/EventPrice";
import { EventRating } from "./EventRating";
import { EventDate } from "./value-objects/EventData";
import { EventName } from "./value-objects/EventName";
import { EventCategories, EventCategory } from "./value-objects/EventCategory";
import { EventStatus, EventStatuses } from "./value-objects/EventStatus";
import { EventParticipant } from "./EventParticipant";
import { EventMaxParticipants } from "./value-objects/EventMaxParticipants";
import { Location } from "../value-objects/Location";

export class Event {
  readonly name: string;
  readonly location: Location;
  readonly description: string;
  readonly image: string;
  readonly rating: number;
  readonly price: number;
  readonly organizer: Organizer;
  readonly maxParticipants: number;
  private date: Date;
  private category: string;
  private status: string;
  private participants: EventParticipant[];

  constructor(eventData: EventData) {
    this.name = new EventName(eventData.name).getValue();
    this.date = new EventDate(eventData.date).getValue();
    this.location = new Location({
      address: eventData.address,
      city: eventData.city,
      state: eventData.state,
    });
    this.description = new EventDescription(eventData.description).getValue();
    this.image = new EventImage(eventData.image).getValue();
    this.rating = new EventRating(eventData.rating).getValue();
    this.price = new EventPrice(eventData.price).getValue();
    this.category = new EventCategory(eventData.category).getValue();
    this.status = new EventStatus(EventStatuses.PENDING).getValue();
    this.organizer = new Organizer(eventData.organizer);
    this.maxParticipants = new EventMaxParticipants(
      eventData.maxParticipants
    ).getValue();

    this.participants = [];
  }

  getName(): string {
    return this.name;
  }

  startEvent() {
    if (this.status !== EventStatuses.PENDING) {
      throw new Error("Event cannot be started");
    }
    this.status = EventStatuses.STARTED;
  }

  concludeEvent() {
    if (this.status !== EventStatuses.STARTED) {
      throw new Error("Event cannot be concluded");
    }
    this.status = EventStatuses.CONCLUDED;
  }

  getStatus(): string {
    return this.status;
  }

  addParticipant(participant: EventParticipant) {
    if (this.participants.length >= this.maxParticipants) {
      throw new Error("Event is full");
    }
    this.participants.push(participant);
  }

  removeParticipant(participant: EventParticipant) {
    if (!this.participants.length) {
      throw new Error("Event is empty");
    }

    if (!this.participants.includes(participant)) {
      throw new Error("Participant is not in event");
    }

    if (this.status === EventStatuses.CONCLUDED) {
      throw new Error("Event is concluded");
    }
    if (this.status === EventStatuses.STARTED) {
      throw new Error("Event is started");
    }

    this.participants.splice(this.participants.indexOf(participant), 1);
  }

  changeCategory(category: EventCategories) {
    this.category = new EventCategory(category).getValue();
  }

  getCategory(): string {
    return this.category;
  }

  getParticipants(): EventParticipant[] {
    return this.participants;
  }

  changeDate(date: Date) {
    if (this.status === EventStatuses.CONCLUDED) {
      throw new Error("Event is concluded");
    }
    if (this.status === EventStatuses.STARTED) {
      throw new Error("Event is started");
    }

    this.date = new EventDate(date).getValue();
  }

  getDate(): Date {
    return this.date;
  }
}

export interface EventData {
  name: string;
  date: Date;
  address: string;
  city: string;
  state: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  category: string;
  maxParticipants: number;
  organizer: OrganizerData;
}
