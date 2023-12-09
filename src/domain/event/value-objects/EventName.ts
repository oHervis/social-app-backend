export class EventName {
  private readonly value: string;

  constructor(name: string) {
    if (!name) {
      throw new Error("Event name is required");
    }

    if (name.length < 3) {
      throw new Error("Event name must be at least 3 characters");
    }

    if (name.length > 255) {
      throw new Error("Event name must be less than 255 characters");
    }

    this.value = name;
  }

  getValue(): string {
    return this.value;
  }
}
