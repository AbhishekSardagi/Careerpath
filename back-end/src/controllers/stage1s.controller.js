const express = require("express")
const router = express.Router()

const Stage1s = require("../models/stage1s.model")

router.get("/", async function (req, res) {
    const stage1s = await Stage1s.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: stage1s })
})

module.exports = router