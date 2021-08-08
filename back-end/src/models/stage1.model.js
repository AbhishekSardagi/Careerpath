const mongoose = require("mongoose");

const Stage1Schema = new mongoose.Schema({
    id: {type:Number, required: false},
    Title: {type:String, required: false},
    Description: {type:String, required: false}
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("stage1", Stage1Schema);