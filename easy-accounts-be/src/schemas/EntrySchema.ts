import DataAccess from "../config/dataAccess";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class HeroSchema {
   
  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           power: {
               type: String,
               required: true
           },
           amountPeopleSaved: {
               type: Number,
               required: true
           }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model<IHeroModel>("Heroes", HeroSchema.schema);
export = schema;



const entrySchema = new mongoose.Schema({
    date: Date,
    name: { type: String, unique: true },
    type: String,
    nett: Number,
    tax: Number,
    tags: Array
  });
  