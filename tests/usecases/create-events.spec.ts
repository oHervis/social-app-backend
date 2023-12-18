import { EventRepository } from "../../src/application/repositories/events/event-repository";
import {
  CreateEvent,
  CreateEventInput,
} from "../../src/application/usecases/events/create-event";
import { EventCategories } from "../../src/domain/event/value-objects/EventCategory";
import { Event } from "../../src/domain/event/Event";
import { UploadImageGateway } from "../../src/application/gateway/upload-image.gateway";
import {
  PushNotification,
  PushNotificationGateway,
} from "../../src/application/gateway/push-notification.gateway";

function eventFactory(params: any = {}) {
  return {
    name: "Event name",
    date: new Date().setDate(new Date().getDate() + 1),
    address: "Event address",
    city: "Event city",
    state: "Event state",
    description: "Event description",
    image: "https://eventimage.com",
    rating: 5,
    price: 100,
    category: EventCategories.BUSINESS,
    status: "PENDING",
    organizer: {
      name: "Organizer name",
      email: "asdasd@asdasdasd.com",
      phone: "4144444444",
      image: "Organizer image",
      description: "Organizer description",
      rating: 5,
      website: "https://organizerwebsite.com",
      address: "Organizer address",
      city: "Organizer city",
      state: "Organizer state",
    },
    maxParticipants: 100,
    minParticipants: 10,
    ...params,
  };
}

function repositoryCreateEventFactory(params: any = {}): EventRepository {
  return {
    createEvent: async (event: Event) => {
      return params;
    },
    getEventById: async (id: string) => {
      return eventFactory({ id });
    },
    getEvents: async () => {
      return [eventFactory()];
    },
    updateEvent: async (event: Event) => {},
    deleteEvent: async (id: string) => {},
  };
}

function createImageUploadGateway(): UploadImageGateway {
  return {
    async uploadImage(image: string): Promise<string> {
      return image;
    },
  };
}

function createPushNotificationGateway(): PushNotificationGateway {
  return {
    async sendNotification(notification: PushNotification): Promise<void> {
      console.log(notification);
    },
  };
}

describe("Create Event Usecases", () => {
  it("should create an event", async () => {
    const createEventInput: CreateEventInput = eventFactory();
    const EventRepository = repositoryCreateEventFactory({
      id: "78fdeb0c-f37d-484b-9ab1-deb0d24421a7",
    });

    const uploadGateway = createImageUploadGateway();
    const pushNotificationGateway = createPushNotificationGateway();

    const createEventUseCases = new CreateEvent(
      createEventInput,
      EventRepository,
      uploadGateway,
      pushNotificationGateway
    );

    const event = await createEventUseCases.execute();

    expect(createEventUseCases).toBeDefined();
    expect(event.id).toEqual("78fdeb0c-f37d-484b-9ab1-deb0d24421a7");
    console.log(event);
  });
});
