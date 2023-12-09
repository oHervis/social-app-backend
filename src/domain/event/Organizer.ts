import { Email } from "../value-objects/Email";
import { Location } from "../value-objects/Location";
import { Name } from "../value-objects/Name";
import { Phone } from "../value-objects/Phone";
import { Rating } from "../value-objects/Rating";
import { OrganizerDescription } from "./value-objects/OrganizerDescription";

export class Organizer {
  private readonly name: string;
  private readonly description: string;
  private readonly image: string;
  private readonly rating: number;
  private readonly website: string;
  private readonly email: string;
  private readonly phone: string;
  private readonly address: Location;

  constructor(organizerData: OrganizerData) {
    this.name = new Name(organizerData.name).getValue();
    this.description = new OrganizerDescription(
      organizerData.description
    ).getValue();
    this.image = organizerData.image;
    this.rating = new Rating(organizerData.rating).getValue();
    this.website = new URL(organizerData.website).toString();
    this.email = new Email(organizerData.email).getValue();
    this.phone = new Phone(organizerData.phone).getValue();
    this.address = new Location({
      address: organizerData.address,
      city: organizerData.city,
      state: organizerData.state,
    });
  }
}

export interface OrganizerData {
  name: string;
  description: string;
  image: string;
  rating: number;
  website: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}
