//ALLOW TO PLAY WITH URL'S. MANUPLATE URL ETC
const url=require('url')

const address='https://cutshort.io/company/tvf?year=2018&month=february'

//URL PARSED
const parsedUrl=url.parse(address, true);

//GET THE HOST
console.log(parsedUrl.host)

//GET PATH NAME AFTER THE HOST
console.log(parsedUrl.pathname)

//GET THE QUERY STRINGIN THE URL
console.log(parsedUrl.query) // ...QUERY.MONTH
