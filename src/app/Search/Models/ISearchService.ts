import { IImage } from "./IImage";

export interface ISearchService {
  id:number;
  name:string;
  description:string;
  images:IImage[];
  avgRating:number;
  profileImage:string;
  firstReview:string;
  workingHoursEnd:Date;
  workingHoursStart:Date;
}
