import { EventDescription } from "./value-objects/EventDescription";
import { EventImage } from "./value-objects/EventImage";
import { EventLocation } from "./EventLocation";
import { Organizer } from "./EventOrganizer";
import { EventPrice } from "./value-objects/EventPrice";
import { EventRating } from "./EventRating";
import { EventDate } from "./value-objects/EventData";
import { EventName } from "./value-objects/EventName";
import { EventCategories, EventCategory } from "./value-objects/EventCategory";
import { EventStatus, EventStatuses } from "./value-objects/EventStatus";
import { EventParticipant } from "./EventParticipant";
import { EventMaxParticipants } from "./value-objects/EventMaxParticipants";
import { EventMinParticipants } from "./value-objects/EventMinParticipants";

export class Event {
  private name: string;
  private date: Date;
  private location: EventLocation;
  private description: string;
  private image: string;
  private rating: number;
  private price: number;
  private category: string;
  private organizer: Organizer;
  private status: string;
  private particpants: EventParticipant[];
  private maxParticipants: number;
  private minParticipants: number;

  constructor(eventData: EventData) {
    this.name = new EventName(eventData.name).getValue();
    this.date = new EventDate(eventData.date).getValue();
    this.location = new EventLocation({
      address: eventData.address,
      city: eventData.city,
      state: eventData.state,
    });
    this.description = new EventDescription(eventData.description).getValue();
    this.image = new EventImage(eventData.image).getValue();
    this.rating = new EventRating(eventData.rating).getValue();
    this.price = new EventPrice(eventData.price).getValue();
    this.category = new EventCategory(eventData.category).getValue();
    this.status = new EventStatus(eventData.status).getValue();
    this.organizer = new Organizer(eventData.organizer);
    this.maxParticipants = new EventMaxParticipants(
      eventData.maxParticipants
    ).getValue();
    this.minParticipants = new EventMinParticipants(
      eventData.minParticipants
    ).getValue();

    this.particpants = [];
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
    if (this.particpants.length >= this.maxParticipants) {
      throw new Error("Event is full");
    }
    this.particpants.push(participant);
  }

  removeParticipant(participant: EventParticipant) {
    if (!this.particpants.length) {
      throw new Error("Event is empty");
    }

    if (!this.particpants.includes(participant)) {
      throw new Error("Participant is not in event");
    }

    if (this.status === EventStatuses.CONCLUDED) {
      throw new Error("Event is concluded");
    }
    if (this.status === EventStatuses.STARTED) {
      throw new Error("Event is started");
    }

    this.particpants.splice(this.particpants.indexOf(participant), 1);
  }

  changeCategory(category: EventCategories) {
    this.category = new EventCategory(category).getValue();
  }

  getCategory(): string {
    return this.category;
  }

  getParticipants(): EventParticipant[] {
    return this.particpants;
  }

  changeDate(date: Date) {
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
  status: string;
  maxParticipants: number;
  minParticipants: number;
  organizer: {
    name: string;
    description: string;
    image: string;
    rating: number;
    website: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
  };
}
