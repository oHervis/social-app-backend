export class Email {
  private readonly value: string;

  constructor(email: string) {
    if (!email) {
      throw new Error("Email is required");
    }

    if (!email.includes("@")) {
      throw new Error("Email must be valid");
    }

    if (email.length > 255) {
      throw new Error("Email must be less than 255 characters");
    }

    if (email.length < 6) {
      throw new Error("Email must be more than 6 characters");
    }

    this.value = email;
  }

  getValue(): string {
    return this.value;
  }
}
