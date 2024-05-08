import { Profession } from "./profession"

export interface User{
    id:number
    name:string
    password:string
    profession:Profession
}