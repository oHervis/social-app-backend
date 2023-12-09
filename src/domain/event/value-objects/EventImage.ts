export class EventImage {
  private readonly value: string;

  constructor(image: string) {
    if (!image) {
      throw new Error("Event image is required");
    }

    this.value = image;
  }

  getValue(): string {
    return this.value;
  }
}
