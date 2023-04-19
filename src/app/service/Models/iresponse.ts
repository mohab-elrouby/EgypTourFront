import { IserviceReview } from "./iservice-review";

export interface IResponse {
    data: IserviceReview[];
    message: string;
    statusCode:number
}
