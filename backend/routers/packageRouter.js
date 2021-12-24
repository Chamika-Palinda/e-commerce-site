import express from 'express';
import data from '../data.js';
import Package from '../models/packageModel.js';

const packageRouter = express.Router();

packageRouter.get('/seed', async(req,res) =>{
    const createdPackages = await Package.insertMany(data.packages);
    res.send({ createdPackages }); 
})

export default  packageRouter;