import mongoose from "mongoose";

const daySchema = new mongoose.Schema(
    {
       day:{ type:Number , required: true},
       dayTopic :{type:String , required:true},
       dayIntro:{ type:String}
    }
);

const Day = mongoose.model("Day",daySchema);
export default Day;