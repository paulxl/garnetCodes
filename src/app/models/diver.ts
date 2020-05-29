import { Divelog } from './divelog';

export class Diver {
  name: string;
  emergContact: string;
  cumulativeTime: number;
  totalDives: number;
  dives: Divelog[];
  diveCertificate: string;

  constructor({
    name,
    emergContact,
    cumulativeTime,
    totalDives,
    dives,
    diveCertificate,
  }: {
    name?: string;
    emergContact?: string;
    cumulativeTime?: number;
    totalDives?: number;
    dives?: [];
    diveCertificate?: string;
  } = {}) {
    this.name = name;
    this.emergContact = emergContact;
    this.cumulativeTime = cumulativeTime;
    this.totalDives = totalDives;
    this.dives = dives;
    this.diveCertificate;
  }
}
