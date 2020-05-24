// imports go on top if we are bringing in any other entities

export class Park {
  id: number;
  name: string;
  location: [];

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
    this.location = [];
  }
}
