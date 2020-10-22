const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("About this page: Exercise Three "));
router.get("/me", (req, res) => res.send("About Me: Exercise Three"));
router.get("/json", (req, res) =>
    res.send([{ itemOne: "cool", itemTwo: "cooler"}])
);

module.exports = router;