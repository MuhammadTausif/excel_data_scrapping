var str = ['3.1 Now','3.1.1','3.1  aslam','3.12 '];
for(var n in str){
    // console.log(str[n].match(/\b3/));
    str_element = str[n];
    patrn= /\b3.[0-9]+ /;
    if(patrn.test(str_element)){
        console.log(patrn.test(str_element) + ' : ' + str_element);
    }
    
    // console.log(abc.match(/\b3.1\c[a-z]n*/));
}

// console.log(str);
// var n = str.search("W3Schools");
// console.log(n);