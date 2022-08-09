const express = require("express");
   
const app = express();

// создаем парсер для данных в формате json
const jsonParser = express.json();

// // создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function (request, response) {  
    response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));

// app.get("/script.js", function (request, response) {
//     response.sendFile(__dirname + "/script.js");
// });



app.post("/", jsonParser, function (request, response) {
    //const fs = require("fs");
    if(!request.body) return response.sendStatus(400);
    //show data were sended from front
    console.log(request.body);
    let data = request.body;
    response.json(data);
    // fs.readFile(request.body.way, "UTF-8", 
    //         function(error,data){
    //             console.log("Асинхронное чтение файла");
    //             if (error) {
    //               response.json(`нема доступу до файлу`);
    //             }else{
    //               console.log(data);  // выводим считанные данные
    //               response.json(`${data}`);
    //             }
    // });
});
   
app.listen(3000, ()=>console.log("Сервер запущен..."));