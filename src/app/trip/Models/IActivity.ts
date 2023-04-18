import { ILocation } from "./ILocation"
import { INote } from "./INote"

export interface IActivity{
  id?:number,
  name:string,
  description:string,
  start:Date,
  end:Date,
  tag:string,
  location?:ILocation,
  notes?:INote[]
}
