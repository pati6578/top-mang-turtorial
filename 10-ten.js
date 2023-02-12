const{readFileSync,writeFileSync}= require('fs'); // I method
console.log('start');//12 step
//const fs = require('fs') //II method
//fs.readFileSync();
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second)

writeFileSync('./content/result-sync,txt',`here is the result :${first} and ${second}`,{flag :'a'})
console.log('done with tis task')//12 step
console.log('starting with new')//12 step zeb pokazac co po kolei leci read i result