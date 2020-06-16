const express = require("express");
var bodyParser = require("body-parser");
const config = require('./config/config');
const userController = require('./utils/ExcelGenerator');

class Server {
  constructor() {
    this.app = express();
    this.app.listen(config.port, function() {
      console.log("Server listening on port: " + config.port);
    });
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(function(req, res, next) {
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.header("access-Control-Allow-Origin", "*");
      next();
    });
    userController.ExcelCreator();
  }
}

module.exports.Server = Server;
const server = new Server();
