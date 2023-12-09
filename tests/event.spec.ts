import { Event } from "../src/domain/event/Event";
import { EventParticipant } from "../src/domain/event/EventParticipant";
import { EventCategories } from "../src/domain/event/value-objects/EventCategory";
import { EventStatuses } from "../src/domain/event/value-objects/EventStatus";

function eventFactory(params: any = {}) {
  return {
    name: "Event name",
    date: new Date().setDate(new Date().getDate() + 1),
    address: "Event address",
    city: "Event city",
    state: "Event state",
    description: "Event description",
    image: "Event image",
    rating: 5,
    price: 100,
    category: EventCategories.BUSINESS,
    status: EventStatuses.PENDING,
    organizer: {
      name: "Organizer name",
      email: "asdasdasd@asdasd.com",
      phone: "Organizer phone",
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

describe("Event", () => {
  it("should create an event", () => {
    // Arrange

    // Act
    const event = new Event(eventFactory());

    // Assert
    expect(event).toBeDefined();
  });

  test("should add a participant", () => {
    // Arrange
    const event = new Event(eventFactory());

    // Act
    const participant = new EventParticipant({
      name: "Participant name",
      email: "asdasd@asdasdad.com",
      phone: "41988946809",
      image: "Participant image",
    });

    event.addParticipant(participant);

    // Assert

    expect(event.getParticipants()).toHaveLength(1);
  });

  test("should remove a participant", () => {
    // Arrange
    const event = new Event(eventFactory());

    const participant = new EventParticipant({
      name: "Participant name",
      email: "asdasd@asdasd.com",
      phone: "41988946809",
      image: "Participant image",
    });

    event.addParticipant(participant);

    // Act

    event.removeParticipant(participant);

    // Assert

    expect(event.getParticipants()).toHaveLength(0);
  });

  test("should start an event", () => {
    // Arrange
    const event = new Event(eventFactory());

    // Act
    event.startEvent();

    // Assert
    expect(event.getStatus()).toBe(EventStatuses.STARTED);
  });

  test("should conclude an event", () => {
    // Arrange
    const event = new Event(eventFactory({ status: EventStatuses.STARTED }));

    // Act
    event.concludeEvent();

    // Assert
    expect(event.getStatus()).toBe(EventStatuses.CONCLUDED);
  });

  test("Should Change Category", () => {
    // Arrange
    const event = new Event(eventFactory());

    // Act
    event.changeCategory(EventCategories.EDUCATION);

    // Assert
    expect(event.getCategory()).toBe("education");
  });

  test("Should change event Date", () => {
    // Arrange
    const event = new Event(eventFactory());

    // Act
    const newDate = new Date(new Date().setDate(new Date().getDate() + 2));
    event.changeDate(newDate);

    // Assert
    expect(event.getDate()).toEqual(newDate);
  });
});
