import mongoose from "mongoose";
import Day from "./dayModel";
import FAQ from "./faqModel";
import Highlight from "./highlightModel";
import Image from "./imageModel";
import Included from "./includedModel";


const packageSchema = new mongoose.Schema(
    {
        pkName:{ type:String, unique:true, required:true},
        pktourStyle :{type: String, required:true},
        pkIntroSeo :{type: String, required:true},
        pkMinPeople: {type:Number, required:true},
        pkStarRating:{type:Number, required:true},
        pkPricePerPerson:{type:Number,required: true},
        pkCategoryName : {type:String , required:true},
        pkMainImages :[Image],
        pkPlaceImages :[Image],
        pkHighlights:[Highlight],
        pkItinerary:{
            itineraryIntro:{type:String},
        },
        day:[Day],
        included:[Included],
        faqs:[FAQ],
        isPkPromoteMainImpression:{type:Boolean},
        pkPromotionTitle:{type:String},
        pkPromotionSlogan:{type:String},
        pkPromotionDetails:{type:String},
        pkSEOTags:[{
            type:String
        }],
        isPublished:{type:Boolean}
    
    }
);

export default Package;
