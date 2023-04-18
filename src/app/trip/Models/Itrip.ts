import { ILocation } from "./ILocation"
import{IOwner} from "./IOwner"
import { IToDoList } from "./IToDoList"
import { IActivity } from "./IActivity"
export interface Itrip {
  id:number,
  name:string,
  start:Date,
  end:Date,
  description:string,
  ypostion:number,
  backgroundImage:string,
  location:ILocation,
  owner:IOwner,
  viewers:IOwner[],
  activities:IActivity[],
  toDOLists:IToDoList[]
}
