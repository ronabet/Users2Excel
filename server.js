const express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
const jexcel = require('json2excel');
const userController = require('./controllers/userController');

class Server {
  constructor() {
    this.app = express();
    this.app.listen(port, function() {
      console.log("Server listening on port: " + port);
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

    this.app.get("/asdf", async (req, res) => {
      var response = await userController.GetAllUsers();
      let dataArr = [];
      console.log("kkkkkk" + response);
      response.forEach(element => {
        dataArr.push({
            firstName: element.firstName,
            lastName: element.firstName,
            mail: element.mail,
            hierarchy: element.hierarchy
         });
      });

      var data = {
        sheets: [{
          header: {
              firstName: 'שם פרטי',
              lastName: 'שם משפחה',
              mail: 'מייל',
              hierarchy: 'היררכיה'
            },
            items: dataArr,
            sheetName: 'sheet1',
        }],
        filepath: 'j2x.xlsx'
    } 
     
    jexcel.j2e(data,function(err){ 
        console.log('finish')
    });
      res.send(response);
    });

    
    // kak.forEach(element => {
    //   console.log(element.lastName);
    // });

    var data = [
      {
         firstName:'john',
         lastName:'how to use this',
         mail: "ron@"
      },
      {
         firstName:'john',
         lastName:'how to use this',
         mail: "ron@"
      }
     ];

  //   var data = {
  //     sheets: [{
  //       header: {
  //           firstName: 'שם פרטי',
  //           lastName: 'שם משפחה',
  //           mail: 'מייל',
  //           hierarchy: 'היררכיה'
  //         },
  //         items: data,
  //         sheetName: 'sheet1',
  //     }],
  //     filepath: 'j2x.xlsx'
  // } 
   
  // jexcel.j2e(data,function(err){ 
  //     console.log('finish')
  // });


  }
}

module.exports.Server = Server;
const server = new Server();
