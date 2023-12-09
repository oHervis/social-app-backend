export class EventMaxParticipants {
  private readonly value: number;

  constructor(maxParticipants: number) {
    if (!maxParticipants) {
      throw new Error("Max participants is required");
    }

    if (maxParticipants < 1) {
      throw new Error("Max participants must be greater than 1");
    }

    this.value = maxParticipants;
  }

  getValue(): number {
    return this.value;
  }
}
