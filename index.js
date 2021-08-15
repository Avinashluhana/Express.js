const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
console.log(path.join(__dirname,"/view/partials"))


app.set("view engine", "hbs");


// reading the html file through express.js

const staticPath = path.join(__dirname);
const partialPath = path.join(__dirname, "/views/partials");
app.use(express.static(staticPath));

hbs.registerPartials(partialPath);

app.get("/", (req,res) => {
    // res.send("Express is working");
    res.render("index");

})

app.get("/about", (req, res) =>{
    res.render("#about");
})

app.get("*", (req, res) =>{
    res.render("404",{
        errorMessage: "Oops Page not Found"
    });

})

app.listen(5000, () => {
    console.log("Hello Exopress");
});