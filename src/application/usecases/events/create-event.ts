import { OrganizerData } from "../../../domain/event/Organizer";
import { Event } from "../../../domain/event/Event";
import { CreateEventRepository } from "../../repositories/events/create-event-repository";
import { UploadImageGateway } from "../../gateway/upload-image.gateway";

export class CreateEvent {
  constructor(
    private readonly createEventInput: CreateEventInput,
    private readonly createEventRepository: CreateEventRepository,
    private readonly uploadImageGateway: UploadImageGateway
  ) {}

  async execute(): Promise<CreateEventOutput> {
    const organizer: OrganizerData = {
      name: this.createEventInput.organizer.name,
      description: this.createEventInput.organizer.description,
      image: this.createEventInput.organizer.image,
      rating: this.createEventInput.organizer.rating,
      website: this.createEventInput.organizer.website,
      email: this.createEventInput.organizer.email,
      phone: this.createEventInput.organizer.phone,
      address: this.createEventInput.organizer.address,
      city: this.createEventInput.organizer.city,
      state: this.createEventInput.organizer.state,
    };

    const image = await this.uploadImageGateway.uploadImage(
      this.createEventInput.image
    );

    const event = new Event({
      name: this.createEventInput.name,
      date: this.createEventInput.date,
      address: this.createEventInput.address,
      city: this.createEventInput.city,
      state: this.createEventInput.state,
      description: this.createEventInput.description,
      image,
      rating: this.createEventInput.rating,
      price: this.createEventInput.price,
      category: this.createEventInput.category,
      maxParticipants: this.createEventInput.maxParticipants,
      organizer: organizer,
    });

    const eventCreated = await this.createEventRepository.execute(event);

    return {
      id: eventCreated.id,
      name: event.getName(),
      date: event.getDate(),
      location: {
        address: event.location.address,
        city: event.location.city,
        state: event.location.state,
      },
      description: event.description,
      image: event.image,
      rating: event.rating,
      price: event.price,
      category: event.getCategory(),
      maxParticipants: event.maxParticipants,
      organizer: {
        name: event.organizer.name,
        description: event.organizer.description,
        image: event.organizer.image,
        rating: event.organizer.rating,
        website: event.organizer.website,
        email: event.organizer.email,
        phone: event.organizer.phone,
      },
    };
  }
}

export interface CreateEventInput {
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

export interface CreateEventOutput {
  id: string;
  name: string;
  date: Date;
  location: {
    address: string;
    city: string;
    state: string;
  };
  description: string;
  image: string;
  rating: number;
  price: number;
  category: string;
  maxParticipants: number;
  organizer: {
    name: string;
    description: string;
    image: string;
    rating: number;
    website: string;
    email: string;
    phone: string;
  };
}
