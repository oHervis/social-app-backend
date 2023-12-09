export class Rating {
  private readonly value: number;

  constructor(rating: number) {
    if (rating && (rating < 1 || rating > 5)) {
      throw new Error("Rating must be between 1 and 5");
    }

    this.value = rating;
  }

  getValue(): number {
    return this.value;
  }
}
