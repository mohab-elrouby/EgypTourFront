import { ILocation } from "src/app/trip/Models/ILocation";
import { IImage } from "./IImage";

export interface ISearchService {
  id:number;
  name:string;
  description:string;
  images:IImage[];
  avgRating:number;
  profileImage:string;
  firstReview:string;
  location:ILocation
  workingHoursEnd:Date;
  workingHoursStart:Date;
}
