var fs = require('fs');

obj = {
    "1": "aa",
    "2": "bb"
};

var newNum = "3";
var newVal = "cc";

obj[newNum] = newVal;
obj['name'] = ['Aslam','Akram']
obj['Aslam'] = ['Aslam','Akram']


fs.writeFile('p3.json', JSON.stringify(obj, null, 1));
console.log(obj["3"]);

var events = [{}]; // empty array
// var checks = dojo.query("input[name=item]");
// var checksLen = checks.length;
// var i;
// for (i = 0; i < checksLen; i += 1) {
//     if (checks[i].checked === true) {
//         events[0][i] = checks[i].value;
//     }
// }
// console.log(events);