export class EventImage {
  private readonly value: string;

  constructor(image: string) {
    if (!image) {
      throw new Error("Event image is required");
    }

    try {
      new URL(image);
    } catch (error) {
      throw new Error("Event image is invalid");
    }

    this.value = image;
  }

  getValue(): string {
    return this.value;
  }
}
