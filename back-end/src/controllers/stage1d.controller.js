const express = require("express")
const router = express.Router()

const Stage1d = require("../models/stage1d.model")

router.get("/", async function (req, res) {
    const stage1d = await Stage1d.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: stage1d })
})

module.exports = router