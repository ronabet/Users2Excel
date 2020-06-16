const axios = require('axios');
const spikeGetToken = require('./spikeKartoffel');
const config = require('../config/config');
const jexcel = require('json2excel');
var exports = module.exports;

async function GetAllUsersArray() {
  const SpikeToken = await spikeGetToken();
  console.log(SpikeToken);
  const resAx = await axios.get(config.KartoffelURL, 
    {
      headers: {
        Authorization: SpikeToken
      }
    })
  return resAx.data;
}

exports.ExcelCreator = async function() {
  var response = await GetAllUsersArray();
  let dataArr = [];
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
      header: config.ExcelHeaders,
        items: dataArr,
        sheetName: config.ExcelSheetName,
    }],
    filepath: config.Excelfilepath
  } 
  jexcel.j2e(data,function(err){ 
      console.log('Excel File Generated Successfuly :)')
  });
}

