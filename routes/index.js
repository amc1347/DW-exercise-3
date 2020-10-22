const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Homepage: Exercise Three "));

module.exports = router;