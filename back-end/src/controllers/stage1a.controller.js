const express = require("express")
const router = express.Router()

const Stage1a = require("../models/stage1a.model")

router.get("/", async function (req, res) {
    const stage1a = await Stage1a.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: stage1a })
})

module.exports = router