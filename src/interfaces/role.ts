import { ICompany } from "./company";
import { IDataset } from "./dataset";
import { BaseModel } from "./utils";

export interface IRole extends BaseModel {
    name:       string
    company_id: number | ICompany
    datasets:   Array<number | IDataset>
}