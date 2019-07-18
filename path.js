//USED TO GET PATH, FILENAME, FILES ETC
const path=require('path')

//GETS THE CURRENT PATH AND JOINS WITH THE FILENAME
const fileLocation=path.join(__dirname, 'app.js')
console.log(fileLocation)

//GETSTHE FILE NAME
const fileName=path.basename(fileLocation) 
console.log(fileName)

//GET THE FILE EXTENSION NAME
const fileExt=path.extname(fileName)
console.log(fileExt)