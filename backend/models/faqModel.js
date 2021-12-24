import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
    {
       _id:{ type:String ,unique:true, required: true},
       question :{type:String , required:true},
       answer:{ type:String}
    }
);

const FAQ = mongoose.model("FAQ",faqSchema);
export default FAQ;