import { IApplication } from "./application";
import { IDataset } from "./dataset";
import { BaseModel } from "./utils";

export interface ITask extends BaseModel {
    status:         string
    new_dataset:    number | IDataset
    application:    number | IApplication
}