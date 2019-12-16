import { Image } from './image.model';

export class Offer {
  public id: number;
  public category: string;
  public title: string;
  public description: string;
  public advertiser: string;
  public value: number;
  public spotlight: boolean;
  public images: Array<Image>;
}
