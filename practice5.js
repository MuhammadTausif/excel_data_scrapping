var fs = require('fs');
temp_obj0 = []
temp_obj = [{
    "Name": "Al mansoori",
    "Data": [{
        "Price": "171898656.4",
        "Name": "3 Commercial Envelope"
    }, {
        "Price": "11923029",
        "Name": "3.2 Bill No. 01: PRELIMINARIES / GENERAL REQUIREMENTS"
    }]
}, {
    "Name": "Al Mezin General Contracting",
    "Data": [{
        "Price": "196764000",
        "Name": "3 Commercial Envelope"
    }, {
        "Price": "12999403.12",
        "Name": "3.2 Bill No. 01: PRELIMINARIES / GENERAL REQUIREMENTS"
    }]
}]
    
if(temp_obj[0]['Name']='Al mansoori'){
    var feed = {'Pushed Data':'Good'}
    temp_obj[0]['Data'].push(feed)
}
console.log(temp_obj[0]['Name']);
// superHeroes['members'][1]['powers'][8] = "new at 2";
// superHeroes['members'][1]['powers'][5] = "new at 2";
// console.log(superHeroes.homeTown);
// console.log(superHeroes[0]['active']);
// console.log(superHeroes[0]);
// console.log(superHeroes['members'][1]['powers'][2]);

fs.writeFile('p5.json', JSON.stringify(temp_obj, null, 1));
// superHeroes['members'][1]['powers'][8] = "new at 2";
// superHeroes['members'][1]['powers'][5] = "new at 2";
// console.log(superHeroes.homeTown);
// console.log(superHeroes[0]['active']);
// console.log(superHeroes[0]);
// console.log(superHeroes['members'][1]['powers'][2]);

// fs.writeFile('p4.json', JSON.stringify(superHeroes, null, 1));

// for (a in temp_obj) {
//     console.log(temp_obj[a]);
//     if (a == 2) {
//         console.log(a);
//         console.log(temp_obj[a]['C1']);
//     }
// }