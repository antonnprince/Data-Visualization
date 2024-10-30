import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    hotel:String,
    arrival_date_year:Number,
    arrival_date_month:String,
    arrival_date_day_of_month:Number,
    adults:Number,
    children:Number,
    babies:Number,
    country:String
})

export const hotelBookings = mongoose.model('datachecks',hotelSchema) 