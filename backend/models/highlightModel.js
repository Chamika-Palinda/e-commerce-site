import mongoose from "mongoose";

const highlightSchema = new mongoose.Schema(
    {
       highlightName:{ type:String , required: true},
       dayTopic :{type:String , required:true},
       highlightDescription:{ type:String}
    }
);

const Highlight = mongoose.model("Highlight",highlightSchema);
export default Highlight;