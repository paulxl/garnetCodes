import { Time } from '@angular/common';
import { Diver } from './diver';

export class Divelog {
  diver: Diver;
  diveNumber: number;
  date: Date;
  diveSiteName: string;
  geoLocation: {
    latitude: number;
    longitude: number;
  };
  metricStandard: SVGAnimatedEnumeration;
  depth: number;
  bottomTime: number;
  totalTimeAllDives: number;
  weight: number;
  boatOrShore: string;
  freshOrSalt: string;
  visibility: string;
  bottomTemp: number;
  seaCondition: SVGAnimatedEnumeration;
  wx: SVGAnimatedEnumeration;
  suit: boolean;
  suitThickness: number;
  EANxPercent: number;
  dayNight: SVGAnimatedEnumeration;
  wreck: boolean;
  drift: boolean;
  airIn: Time;
  airOut: Time;
  comments: string;
}
