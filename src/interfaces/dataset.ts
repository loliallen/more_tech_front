import { ITag } from "./tag";
import { BaseModel } from "./utils";

export interface IDataset extends BaseModel {
    dataset_id:         string;
    children:           Array<number | IDataset>
    parent:             Array<number | IDataset>
    tags:               Array<number | ITag>
    status:             string
    analytics:          any
    name:               string
    created_at:         Date
    last_modify:        Date
    price_per_row:      number
    features:           string
    price_per_feature:  number
}