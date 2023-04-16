import { ITouristPost } from "./itouristPost"

export interface Ipost
{
    id:string,
    pictureIds: string[],
    datePosted:string,
    likersIds: string[],
    comments: string[],
    content: string
    writer:ITouristPost
}