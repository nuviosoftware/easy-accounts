import * as async from "async";
import * as crypto from "crypto";
import * as nodemailer from "nodemailer";
import * as passport from "passport";
import { BalanceModel, default as Balance } from "../models/balance";
import { Request, Response, NextFunction } from "express";
import { LocalStrategyInfo } from "passport-local";
import { WriteError } from "mongodb";
const request = require("express-validator");


/**
 * GET /api/v1/balance
 * 
 */
export let getAll = (req: Request, res: Response) => {
 
  let balance = new Balance();

  // Save the new model instance, passing a callback
  balance.save(err=>{
    if (err) return handleError(err);
    // saved!
  });

};


export let postItem = (req: Request, res: Response) => {
  
   let balance = new Balance();
 
   // Save the new model instance, passing a callback
   balance.save(err=>{
     if (err) return handleError(err);
     // saved!
   });
 
 };

function handleError(err){
  // blah
}
