const express = require("express")
const router = express.Router()

const Stage1 = require("../models/stage1.model")

router.get("/", async function (req, res) {
    const stage1 = await Stage1.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: stage1 })
})

module.exports = router