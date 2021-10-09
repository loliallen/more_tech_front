import { IDataset } from "./dataset";
import { IUser } from "./user";
import { BaseModel } from "./utils";

export interface ICompany extends BaseModel {
    name:       string;
    logo:       string;
    admin:      number | IUser;
    balance:    number;
    datasets:   Array<number | IDataset> 
}