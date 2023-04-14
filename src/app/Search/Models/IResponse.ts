import { ISearchService } from "./ISearchService";

export interface IResponse {
  count:number;
  services:ISearchService[];
}
