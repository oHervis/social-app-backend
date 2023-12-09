export class EventDate {
  private readonly value: Date;

  constructor(date: Date) {
    if (!date) {
      throw new Error("Event date is required");
    }

    if (date < new Date()) {
      throw new Error("Event date must be in the future");
    }

    this.value = date;
  }

  getValue(): Date {
    return this.value;
  }
}
