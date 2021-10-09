import { ICompany } from "./company";
import { IDataset } from "./dataset";
import { IRole } from "./role";
import { BaseModel } from "./utils";

export interface IUser extends BaseModel {
    name:               string;
    email:              string;
    company_id:         number | ICompany;
    token:              string;
    role:               Array<number | IRole>;
    avaliable_datasets: Array<number | IDataset>  
}