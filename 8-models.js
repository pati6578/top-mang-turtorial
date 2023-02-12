const os = require('os')


// ifo about current user
const user = os.userInfo()
console.log(user);
//method return the system upTime in seconds
console.log(`the system ${os.uptime()} seconds`)
const currentOS={
    name:os.type(),
    relase:os.release(),
    totalem:os.totalmem(),
    freeMem:os.freemem(),

}
console.log(currentOS)





