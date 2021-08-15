const express = require("express");
const hbs = require("hbs");
const requests = require("requests");   



const app = express();

app.set("view engine", "hbs");


app.get("/",(req, res)=>{

    res.render("api");
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=071acf66920385c707ce061db505675a`)
        .on("data",(chunk) => { 
            const objData = JSON.parse(chunk);
            const arrData = [objData];

            // const realTimeData = arrData.map((val) => replaceValue(homePage, val)).join("");
            // console.log(realTimeData);
            console.log(`city name is ${arrData[0].name} and temperature is ${arrData[0].main.temp}`)
            res.write(arrData[0].name);
            // console.log(arrData);
           
        })
        .on("end", (err) =>{
            if(err) return console.log("error found", err);
            res.end();  

        });

})


app.listen("8000");