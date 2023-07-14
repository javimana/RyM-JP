const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");
const server = express();

server.use(morgan("dev")); // dev es el que mas se utiliza
server.use(cors());

server.use(express.json());

server.use("/rickandmorty", router);

module.exports = server;
