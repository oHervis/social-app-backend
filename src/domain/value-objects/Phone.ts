export class Phone {
  private readonly value: string;

  constructor(phone: string) {
    if (!phone) {
      throw new Error("Phone is required");
    }

    if (phone.length > 15) {
      throw new Error("Phone must be less than 15 characters");
    }

    if (phone.length < 8) {
      throw new Error("Phone must be more than 8 characters");
    }

    this.value = phone;
  }

  getValue(): string {
    return this.value;
  }
}
