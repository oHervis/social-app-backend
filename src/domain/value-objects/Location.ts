import { Address } from "./Address";
import { City } from "./City";
import { State } from "./State";

export class Location {
  readonly address: string;
  readonly city: string;
  readonly state: string;

  constructor(locationData: LocationData) {
    this.address = new Address(locationData.address).getValue();
    this.city = new City(locationData.city).getValue();
    this.state = new State(locationData.state).getValue();
  }
}

export interface LocationData {
  address: string;
  city: string;
  state: string;
}
