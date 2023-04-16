import { ILocation } from "./ILocation"
import { INote } from "./INote"

export interface IActivity{
  id:number,
  name:string,
  description:string,
  start:Date,
  end:Date,
  location:ILocation,
  notes:INote[]
}
