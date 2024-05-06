import { Profession } from "./profession"

export interface Job{
    profession:Profession
    name:string
    range:number
    area:string
    requierment:string
    fromHome:boolean
}