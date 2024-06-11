const mongoose = require('mongoose')

const mongooseUniqueValidator = require('mongoose-unique-validator')

var playerSchema = mongoose.Schema({
    pseudo: { type: String, required: true },
    score:{type:String,required:true},
    })

module.exports = mongoose.model("player",playerSchema)