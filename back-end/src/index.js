const express = require("express")

const app = express()

const baseController = require("./controllers/base.controller")
const stage1Controller = require("./controllers/stage1.controller")
const stage1aController = require("./controllers/stage1a.controller")
const stage1cController = require("./controllers/stage1c.controller")
const stage1dController = require("./controllers/stage1d.controller")
const stage1iController = require("./controllers/stage1i.controller")
const stage1sController = require("./controllers/stage1s.controller")
const stage2Controller = require("./controllers/stage2.controller")

app.use("/base", baseController)
app.use("/stage1", stage1Controller)
app.use("/stage1a", stage1aController)
app.use("/stage1c", stage1cController)
app.use("/stage1d", stage1dController)
app.use("/stage1i", stage1iController)
app.use("/stage1s", stage1sController)
app.use("/stage2", stage2Controller)

module.exports = app