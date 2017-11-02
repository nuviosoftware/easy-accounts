import * as mongoose from "mongoose";

interface IEntryModel extends mongoose.Document {
  date: Date;
  name: string;
  type: string;
  nett: number;
  tax: number;
  tags: string[];
}


export class EntryModel {

  _model: IEntryModel;

  constructor(model: IEntryModel) {
    this._model = model;
  }

}