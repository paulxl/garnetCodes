export class Park {
  id: string;
  name: string;
  address: string;
  geoLocation: {
    lat: number;
    long: number;
  };
  comments: string;
  dogFriendly: boolean;

  constructor({
    id,
    name,
    address,
    geoLocation,
    comments,
    dogFriendly,
  }: {
    id?: string;
    name?: string;
    address?: string;
    geoLocation?: { lat: number; long: number };
    comments?: string;
    dogFriendly?: boolean;
  } = {}) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.geoLocation = geoLocation;
    this.comments = comments;
    this.dogFriendly = dogFriendly;
  }
}
