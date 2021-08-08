const mongoose = require("mongoose")

require("dotenv").config()

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

// console.log(username, password, `mongodb+srv://${username}:${password}@cluster0.rhdme.mongodb.net/edupath?retryWrites=true&w=majority`)

const connect = () => {
    return mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.rhdme.mongodb.net/edupath?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

module.exports = connect