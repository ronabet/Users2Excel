var bodyParser = require("body-parser");
var userController = require("./controllers/userController");

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get("/getAllUsers", (req, res) => {
    userController.GetAllUsers(req, res);
  });

};
