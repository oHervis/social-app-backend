export class State {
  private readonly value: string;

  constructor(state: string) {
    if (!state) {
      throw new Error("State is required");
    }

    this.value = state;
  }

  getValue(): string {
    return this.value;
  }
}
