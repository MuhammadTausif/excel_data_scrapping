var XLSX = require('xlsx');
var fs = require('fs');
var data = {}
var json_data = []
data.table = []
var data_names = {}
data_names.table = []

var workbook = XLSX.readFile('data1.xlsx');

var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

fs.writeFile("test1.json", JSON.stringify(xlData, null, 50));

var sheet2arr = function (sheet, dataFile) {
    var result = [];
    var row;
    var rowNum;
    var colNum;
    var ref = sheet['!ref'];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var companiesNameArray = [];
    for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
        row = [];
        var blueColTestFlag = false;
        var temp_colAFound;
        for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
            var nextCell = sheet[
                XLSX.utils.encode_cell({
                    r: rowNum,
                    c: colNum
                })
            ];
            if (typeof nextCell === 'undefined') {
                row.push(void 0);
            } else {
                // Writing names
                if(colNum == 0){
                    temp_colAFound = nextCell.w;
                    var patrn= /\b3.[0-9]+ /;
                    if(patrn.test(temp_colAFound)){                        
                        blueColTestFlag = true;
                        companiesNameArrayForIteration = Array.from( companiesNameArray);
                        // var obj_names = {
                        //     name: temp_colAFound,
                        //     price: '0000'
                        // }
                        // dataFile.table.push(obj_names)
                    }
                }
                if(blueColTestFlag){
                    if(colNum % 4 == 1){
                        var comp = companiesNameArrayForIteration.shift();
                        var obj_names = {
                            // company: comp,
                            name: temp_colAFound,
                            price: nextCell.w
                        }
                        dataFile.table.push(obj_names)
                        for(var i = 0; i<json_data.length+1; i++){
                            // console.log("Index: " + i);
                        }
                        var index = 0;
                        var temp_index = 0;
                        json_data.forEach(element => {
                            if (element.Name == comp) {
                                temp_index = index;
                                // console.log(json_data[index]['Name']);
                                // json_data[index].push(obj_names);
                            }
                            index= index + 1;
                        });

                        // json_data.push(obj_names);
                        json_data[temp_index]['Data'].push(obj_names);
                    }
                }

                // Name writing
                if (rowNum == 8) {
                    if (colNum % 4 == 0) {
                        companiesNameArray.push(nextCell.w);
                        var temp_comp_name = {
                            "Name":nextCell.w,
                            "Data":[]
                        }
                        json_data.push(temp_comp_name);
                    }
                }

                row.push(nextCell.w);
            }
        }
        result.push(row);
    }
    return result;
};

var sheet_temp = sheet2arr(workbook.Sheets[sheet_name_list[0]], data);
var sheet_names = sheet2arr(workbook.Sheets[sheet_name_list[0]], data_names);

obj_a={'abc':'adsf'};
abc = json_data[0];
abcd = abc.Data;
// abc['Data'].push(obj_a);
// abc['Data'].push(obj_a);
// abc['Data'].push(obj_a);
// .push(obj_a);

fs.writeFile('alm.json', JSON.stringify(data, null, 1));
fs.writeFile('alm.json', JSON.stringify(data, null, 1));
fs.writeFile('data_complete.json', JSON.stringify(json_data, null, 100));

// console.log(sheet_temp);

// console.log(xlData);
// console.log(sheet_name_list);

// for ( var item in xlData){
//     console.log(item);
// }

// var Excel = require('exceljs');

// json_data.forEach(element => {
//         console.log(element.Name);
// });
