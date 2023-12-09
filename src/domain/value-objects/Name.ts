export class Name {
  private readonly value: string;

  constructor(name: string) {
    if (!name) {
      throw new Error("Name is required");
    }

    this.value = name;
  }

  getValue(): string {
    return this.value;
  }
}
