import { ICompany } from "./company";
import { ITag } from "./tag";
import { BaseModel } from "./utils";

export interface IDataset extends BaseModel {
    dataset_id:         string;
    children:           Array<number | IDataset>
    parent:             Array<number | IDataset>
    tags:               Array<ITag>
    status:             string
    logo:             string
    analytics:          any
    name:               string
    created_at:         Date | string
    modified_at:        Date | string
    price_per_row:      number
    features:           string
    price_per_feature:  number
    price:              number
    owner:              ICompany
    description:        string
}