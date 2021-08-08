const mongoose = require("mongoose");

const BaseSchema = new mongoose.Schema({
    id: {type:Number, required: false},
    Title: {type:String, required: false}
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("base", BaseSchema);