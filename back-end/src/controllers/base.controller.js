const express = require("express")
const router = express.Router()

const Base = require("../models/base.model")

router.get("/", async function (req, res) {
    const base = await Base.find().lean().exec()

    // res.status(200).json(bases)
    res.status(200).send({ data: base })
})

module.exports = router