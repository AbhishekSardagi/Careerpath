const express = require("express")
const router = express.Router()

const Stage1c = require("../models/stage1c.model")

router.get("/", async function (req, res) {
    const stage1c = await Stage1c.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: stage1c })
})

module.exports = router