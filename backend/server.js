import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Database configurations 
mongoose.connect('mongodb://localhost/amazona_v1',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
});

app.use('/api/users', router1);

const port = process.env.PORT || 5000;
app.listen(port,() =>{
    console.log(`Serve at http://localhost:${port}`);
});