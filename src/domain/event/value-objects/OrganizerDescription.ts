export class OrganizerDescription {
  private readonly value: string;

  constructor(description: string) {
    if (description && description.length < 10) {
      throw new Error(
        "Organizer description must be greater than 10 characters"
      );
    }

    this.value = description;
  }

  getValue(): string {
    return this.value;
  }
}
