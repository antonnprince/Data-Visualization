import express from 'express'
import mongoose, { mongo }  from 'mongoose'
import dotenv from 'dotenv'
import {hotelBookings}  from './models/model.js'


dotenv.config()
const app = express()
app.use(express.json())
const mongo_url = process.env.MONGO_URL

mongoose.connect(mongo_url).then(()=>{
    console.log("Connected to Database")
    app.listen(3000, ()=>{console.log("Server running")})
})

app.get('/data', async(req,res)=>{
    try {
        const result = await hotelBookings.find({})
        return res.status(200).json(result)
    } catch (error) {
        console.log({"message":`${error.message}`})
    }
})