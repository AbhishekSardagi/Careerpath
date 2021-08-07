const mongoose = require("mongoose");

const stage2Schema = new mongoose.Schema({
    id: {type:Number, required: false},
    Title: {type:String, required: false},
    Description: {type:String, required: false}
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("stage2", stage2Schema);