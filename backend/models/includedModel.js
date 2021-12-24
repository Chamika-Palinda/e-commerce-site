import mongoose from "mongoose";

const includedSchema = new mongoose.Schema({
    includedName:{type:String},
    markAsIncludedOrNot:{type:Boolean},
    includedTitle:{type:String},
    includedDescription:{type:String},
});

const Included = mongoose.model("Included",includedSchema);
export default Included;