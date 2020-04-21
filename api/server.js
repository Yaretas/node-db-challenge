const express = require("express");

const db = require("../data/");

const server = express();

server.use(express.json());


module.exports = server;