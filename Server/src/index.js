const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});






// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// // const data = require("./utils/data");
// http
//   .createServer((req, res) => {
//     const { url } = req;
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (url.includes("/rickandmorty/character")) {
//       const id = url.split("/").at(-1);
//       getCharById(res,id) 
//     }
//   })
//   .listen(3001, "localhost");


// if (url.includes("/rickandmorty/character")) {
//   //   const id = url.split("/").pop();
//   const id = url.split("/").at(-1);
//   // const character = data.find((character) => character.id === Number(id));

//   if (character) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(character));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Character not found");
//   }
// } else {
//   res.writeHead(404, { "Content-Type": "text/plain" });
//   res.end("Not Found");
// }
