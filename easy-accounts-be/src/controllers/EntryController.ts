import * as async from "async";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
const request = require("express-validator");


/**
 * GET /api/v1/entry
 *
 */
export let getAll = (req: Request, res: Response) => {

  const schema = new EntrySchema();

  // Save the new model instance, passing a callback
  schema.find((err, entryList) => {
    if (!err) {
      res.json(entryList);
      } else {
      res.json({});
      }
  });

};


export let postItem = (req: Request, res: Response) => {

};

function handleError(err) {
  // blah
}
