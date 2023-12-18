import { PushNotification } from "../../src/application/gateway/push-notification.gateway";
import { RegisterOnEvent } from "../../src/application/usecases/events/register-on-event";
import { EventParticipant } from "../../src/domain/event/EventParticipant";

function eventFactory() {
  return {
    title: "any_title",
    description: "any_description",
    date: new Date(),
    price: 0,
    address: "any_address",
    online: false,
    image: "any_image",
    user: "any_user",
  };
}

function repositoryCreateEventFactory(params: any = {}) {
  return {
    execute: async (ev: any) => {
      return params;
    },
  };
}

function createImageUploadGateway() {
  return {
    async uploadImage(image: string) {
      return image;
    },
  };
}

function createPushNotificationGateway() {
  return {
    async sendNotification(notification: PushNotification) {
      console.log(notification);
    },
  };
}

describe("Register on Event Usecases", () => {
  it("should register a user on an event", async () => {
    const createEventInput = eventFactory();
    const createEventRepository = repositoryCreateEventFactory({
      id: "78fdeb0c-f37d-484b-9ab1-deb0d24421a7",
    });
    const uploadGateway = createImageUploadGateway();
    const pushNotificationGateway = createPushNotificationGateway();
    const registerOnEvent = new RegisterOnEvent();
    const participant: EventParticipant = {
      name: "any_name",
      email: "any_email",
      phone: "any_phone",
    };
    const event = await registerOnEvent.execute(
      participant,
      "78fdeb0c-f37d-484b-9ab1-deb0d24421a7"
    );
    expect(registerOnEvent).toBeDefined();
    expect(event).toEqual("78fdeb0c-f37d-484b-9ab1-deb0d24421a7");
  });
  it("Should register an user on an event and get events participants", async () => {
    // implementar funcionalidade
  });
});
