const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://edupath:edupath123@cluster0.rhdme.mongodb.net/edupath?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

module.exports = connect