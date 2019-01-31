var fs = require('fs');

superHeroes = [{
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [{
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": [
                    "Radiation resistance",
                    "Turning tiny",
                    "Radiation blast"
                ]
            },
            {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                    "Million tonne punch",
                    "Damage resistance",
                    "Superhuman reflexes"
                ]
            },
            {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                    "Immortality",
                    "Heat Immunity",
                    "Inferno",
                    "Teleportation",
                    "Interdimensional travel"
                ]
            }
        ]
    },
    {
        'second': 'good'
    }
]

// superHeroes['members'][1]['powers'][8] = "new at 2";
// superHeroes['members'][1]['powers'][5] = "new at 2";
// console.log(superHeroes.homeTown);
console.log(superHeroes[0]['active']);
console.log(superHeroes[0]);
// console.log(superHeroes['members'][1]['powers'][2]);

fs.writeFile('p4.json', JSON.stringify(superHeroes, null, 1));