//modules
// commonjs every file is module by deafult
//modules encapsulated code (only share miimum)
const names = require('./4-name') 
const sayHi = require('./5-utils')
const data = require('./6-alternatove-flavour')// skad pochodzi require podajemysciezke
//console.log(names); // we have object in 4-name john i pter
 // wyswietli sie function sayHi
require('./7-mind-grenade')

///sayHi('susan)
//sayHi(names.john)
//sayHi(names.peter)