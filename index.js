const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Express is working");
})

app.get("/about", (req, res) =>{
    res.send("This page is developed by Avinash Kumar");
})

app.listen(5000, () => {
    console.log("Hello Exopress");
});