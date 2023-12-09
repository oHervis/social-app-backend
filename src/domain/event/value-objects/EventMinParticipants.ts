export class EventMinParticipants {
  private readonly value: number;

  constructor(minParticipants: number) {
    if (!minParticipants) {
      throw new Error("Min participants is required");
    }

    if (minParticipants < 1) {
      throw new Error("Min participants must be greater than 1");
    }

    this.value = minParticipants;
  }

  getValue(): number {
    return this.value;
  }
}
