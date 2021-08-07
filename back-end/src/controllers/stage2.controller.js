const express = require("express")
const router = express.Router()

const Stage2 = require("../models/stage2.model")

router.get("/", async function (req, res) {
    const stage2 = await Stage2.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: stage2 })
})

module.exports = router