import { IUser } from "./user";
import { BaseModel } from "./utils";

export interface IApplication extends BaseModel {
    status: string
    json:   string
    user:   number | IUser
    price:  number
}