const express = require("express");

const app = express();
const port = 4000; // port 300 is what is usually used but we can use both if they are different number s

const indexRoute = require ("./routes/index.js");
const aboutRoute = require("./routes/about.js");

app.use('/static', express.static("public"));

app.use("/", indexRoute);
app.use("/about", aboutRoute)



app.listen(port, () => console.log("Exercise Three is running!"));

