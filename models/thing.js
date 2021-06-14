const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ThingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: false,
    },
    category:{
        type: String,
        required: true,
    },
    author:{
        type: Schema.Types.ObjectId,
        required: true, 
    },
})

module.exports = mongoose.model('Thing', ThingSchema)