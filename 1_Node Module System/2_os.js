const os=require('os')
// os architecture
console.log(os.arch())
// os platform
console.log(os.platform())
// os cpu core info
console.log(os.cpus())
// to know the network interfaces details
console.log(os.networkInterfaces())
// to know the total memory
console.log(os.totalmem()/1024/1024/1024) // in GB
// to know the free memory
console.log(os.freemem()/1024/1024/1024) // in GB