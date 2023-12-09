export class Address {
  private readonly value: string;

  constructor(address: string) {
    if (!address) {
      throw new Error("Address is required");
    }

    this.value = address;
  }

  getValue(): string {
    return this.value;
  }
}
