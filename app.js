const express = require("express");
   
const app = express();

// создаем парсер для данных в формате json
const jsonParser = express.json();

app.get("/", function (request, response) {  
    response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));

// app.get("/script.js", function (request, response) {
//     response.sendFile(__dirname + "/script.js");
// });

// app.get("/style/style.css", function (request, response) {
//     response.sendFile(__dirname + "/style/style.css");
// });

// app.get("/Assets", function (request, response) {
//     response.sendFile(__dirname + "/Assets");
// });

// app.post("/user", jsonParser, function (request, response) {
//     const fs = require("fs");
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);

//     fs.readFile(request.body.way, "UTF-8", 
//             function(error,data){
//                 console.log("Асинхронное чтение файла");
//                 if (error) {
//                   response.json(`нема доступу до файлу`);
//                 }else{
//                   console.log(data);  // выводим считанные данные
//                   response.json(`${data}`);
//                 }
//     });
// });
   
app.listen(3000, ()=>console.log("Сервер запущен..."));