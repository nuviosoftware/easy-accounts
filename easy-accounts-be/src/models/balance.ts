import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";

export type BalanceModel = mongoose.Document & {
  email: string,
  password: string,
  passwordResetToken: string,
  passwordResetExpires: Date,

  facebook: string,

  profile: {
    name: string,
    gender: string,
    location: string,
    website: string,
    picture: string
  },
};

const balanceSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,

  facebook: String,
  twitter: String,
  google: String,
  tokens: Array,

  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  }
}, { timestamps: true });

// export const Balance: BalanceType = mongoose.model<BalanceType>('Balance', balanceSchema);
const Balance = mongoose.model("Balance", balanceSchema);
export default Balance;