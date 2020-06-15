const axios = require('axios');
const spikeGetToken = require('../spikeKartoffel');
const jexcel = require('json2excel');
var exports = module.exports;

exports.GetAllUsers = async function() {
  const token = await spikeGetToken();
  console.log(token);
  const resAx = await axios.get(
    'http://kartoffel-master.eastus.cloudapp.azure.com:3001/api/persons/', {
      headers: {
        Authorization: token
      }
    },
  );
  // console.log(resAx.data);
  return (resAx.data);
    // console.log(data.data[0].lastName);
    // data.data.forEach(element => {
    //   dataArr.push({
    //     firstName: "element.firstName",
    //     lastName: "element.lastName"
    //   });
    // });
    // var data1 = {
    //       sheets: [{
    //           header: {
    //               firstName: 'שם פרטי',
    //               lastName: 'שם משפחה',
    //               mail: 'מייל',
    //               hierarchy: 'היררכיה'
    //           },
    //           items: [{
    //             firstName: "element.firstName",
    //             lastName: "element.lastName"
    //           }],
    //           sheetName: 'יוזרי אמ"ן',
    //       }],
    //       filepath: 'AmanUsers1.xlsx'
    //     } 
       
    //     jexcel.j2e(data1,function(err){ 
    //         console.log('finish')
    //     });
    // return data.data;
  // })
};

// function WriteToExcel(data){
//   var data = {
//     sheets: [{
//         header: {
//             firstName: 'שם פרטי',
//             lastName: 'שם משפחה',
//             mail: 'מייל',
//             hierarchy: 'היררכיה'
//         },
//         items: data,
//         sheetName: 'יוזרי אמ"ן',
//     }],
//     filepath: 'AmanUsers1.xlsx'
//   } 
 
//   jexcel.j2e(data,function(err){ 
//       console.log('finish')
//   });
// }







   // [
        //  {
        //     firstName:'how to use this',
        //     lastName: "איציק"
        //  },
        //  {
        //   firstName: 'יצחק',
        //   lastName: 'לוי',
        //   mail: 'מיימייל',
        //   tit: 'sssכככככsssss'
        //  }
        // ],