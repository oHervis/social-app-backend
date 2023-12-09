export class EventDescription {
  private readonly value: string;

  constructor(description: string) {
    if (!description) {
      throw new Error("Event description is required");
    }

    if (description.length < 10) {
      throw new Error("Event description must be at least 10 characters long");
    }

    if (description.length > 1000) {
      throw new Error("Event description must be at most 1000 characters long");
    }

    this.value = description;
  }

  getValue(): string {
    return this.value;
  }
}
