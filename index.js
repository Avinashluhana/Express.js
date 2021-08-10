const express = require("express");
const { copyFileSync } = require("fs");
const path = require("path");
const app = express();
console.log(path.join(__dirname,"index.html"))

// reading the html file through express.js

const staticPath = path.join(__dirname)

app.use(express.static(staticPath));

app.get("/", (req,res) => {
    // res.send("Express is working");
})

app.get("/about", (req, res) =>{
    res.send("This page is developed by Avinash Kumar");
})

app.listen(5000, () => {
    console.log("Hello Exopress");
});