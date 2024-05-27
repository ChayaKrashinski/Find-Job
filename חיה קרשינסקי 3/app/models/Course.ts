import {Types} from "./Types";

export interface Course{
    courseName: string,
    hours: number,
    type: Types,
    dateOfBegining: Date,
    teacherName: string
}
