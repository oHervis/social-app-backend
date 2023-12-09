export class EventRating {
  private readonly value: number;

  constructor(rating: number) {
    if (rating < 0 || rating > 5) {
      throw new Error("Event rating must be between 0 and 5");
    }

    this.value = rating;
  }

  getValue(): number {
    return this.value;
  }
}
