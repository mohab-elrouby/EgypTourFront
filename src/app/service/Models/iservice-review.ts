import { IReviewer } from "./ireviewer";

export interface IserviceReview {
    reviewId :string;
    date:Date;
    rating:number;
    reviewer:IReviewer
    content:string
}
