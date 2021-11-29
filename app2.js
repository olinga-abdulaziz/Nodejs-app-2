const path=require('path');
const os=require('os')

var pathObj=path.parse(__filename)
var totalMem=os.totalmem();
var freMem=os.freemem();
console.log(pathObj)
console.log(`Tital Memory is : ${totalMem}`)
console.log(`Free Memory is : ${freMem}`)