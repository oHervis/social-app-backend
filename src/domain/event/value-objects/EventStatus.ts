export class EventStatus {
  private readonly value: string;

  constructor(status: string) {
    this.validate(status);
    this.value = status;
  }

  getValue(): string {
    return this.value;
  }

  private validate(status: string): void {
    if (!status) {
      throw new Error("Event status is required");
    }
    if (!Object.values(EventStatuses).includes(status as EventStatuses)) {
      throw new Error("Event status must be valid");
    }
  }
}

export enum EventStatuses {
  ACTIVE = "active",
  INACTIVE = "inactive",
  CONCLUDED = "concluded",
  PENDING = "pending",
  STARTED = "started",
}
