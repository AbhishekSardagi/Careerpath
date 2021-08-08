const express = require("express")
const router = express.Router()

const Stage1i = require("../models/stage1i.model")

router.get("/", async function (req, res) {
    const stage1i = await Stage1i.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: stage1i })
})

module.exports = router