export class EventLocation {
  private readonly address: string;
  private readonly city: string;
  private readonly state: string;

  constructor(locationData: LocationData) {
    this.address = locationData.address;
    this.city = locationData.city;
    this.state = locationData.state;
  }
}

export interface LocationData {
  address: string;
  city: string;
  state: string;
}
