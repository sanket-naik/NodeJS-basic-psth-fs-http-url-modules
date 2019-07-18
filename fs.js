//ALLOW YOUTO WORK WITH FILE SYSTEM
const fs=require('fs')

//WRITEFILE(-FILENEME-, -CONTENT IN FILE-, -CALLBACKFUNCTION)
// fs.writeFile('message.txt','hello there node', (err)=>{
//     if(err) throw err;
//     console.log("file has been writen")
// })

//READFILE(-PATH-, -ENCODING-, -CALLBACK)
fs.readFile('./message.txt', 'UTF-8', (err,data)=>{
    if(err) throw err;
    console.log(data)
})