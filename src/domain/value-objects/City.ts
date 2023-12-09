export class City {
  private readonly value: string;

  constructor(city: string) {
    if (!city) {
      throw new Error("City is required");
    }

    this.value = city;
  }

  getValue(): string {
    return this.value;
  }
}
