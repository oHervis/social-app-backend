export class EventCategory {
  private readonly value: string;

  constructor(category: string) {
    if (!category) {
      throw new Error("Event category is required");
    }

    if (!Object.values(EventCategories).includes(category as EventCategories)) {
      throw new Error("Event category must be valid");
    }

    this.value = category;
  }

  getValue(): string {
    return this.value;
  }
}

export enum EventCategories {
  SPORTS = "sports",
  MUSIC = "music",
  ARTS = "arts",
  EDUCATION = "education",
  BUSINESS = "business",
  TECH = "tech",
  GAMES = "games",
  OTHER = "other",
}
