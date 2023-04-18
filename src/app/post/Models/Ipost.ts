import { IComment } from "src/app/comment/Models/Icomment"
import { ITouristPost } from "./itouristPost"

export interface Ipost
{
    id:number,
    pictureIds: string[],
    datePosted:Date,
    likersIds: number[],
    comments: IComment[],
    content: string
    isLiked: boolean
    writer:ITouristPost
}