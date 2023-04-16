import { Iactivity } from "src/app/activity/Models/Iactivity"
import { ILocation } from "./ILocation"
import{IOwner} from "./IOwner"
import { IToDoList } from "./IToDoList"
export interface Itrip {
  id:number,
  name:string,
  start:Date,
  end:Date,
  description:string
  backgroundImage:string,
  location:ILocation,
  owner:IOwner,
  viewers:IOwner[],
  activities:Iactivity[],
  toDOLists:IToDoList[]
}
