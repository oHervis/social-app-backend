export class Organizer {
  private readonly name: string;
  private readonly description: string;
  private readonly image: string;
  private readonly rating: number;
  private readonly website: string;
  private readonly email: string;
  private readonly phone: string;
  private readonly address: string;
  private readonly city: string;
  private readonly state: string;

  constructor(organizerData: OrganizerData) {
    this.name = organizerData.name;
    this.description = organizerData.description;
    this.image = organizerData.image;
    this.rating = organizerData.rating;
    this.website = organizerData.website;
    this.email = organizerData.email;
    this.phone = organizerData.phone;
    this.address = organizerData.address;
    this.city = organizerData.city;
    this.state = organizerData.state;
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
