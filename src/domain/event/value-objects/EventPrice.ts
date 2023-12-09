export class EventPrice {
  private readonly value: number;

  constructor(price: number) {
    if (!price) {
      throw new Error("Event price is required");
    }

    if (price < 0) {
      throw new Error("Event price must be greater than 0");
    }

    this.value = price;
  }

  getValue(): number {
    return this.value;
  }
}
