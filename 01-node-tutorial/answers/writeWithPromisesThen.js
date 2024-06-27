const { writeFile, readFile } = require("fs").promises;


writeFile('./temp.txt', '1')
.then(() => {  
    console.log(1)
    return writeFile('./temp.txt', '2')  
    
})  
.then(() => {
    console.log(2)
    return writeFile('./temp.txt', '3')
})
.then(() => {  
    console.log(3)
    return readFile('./temp.txt', 'utf-8')
    
 }) 

 .then(() => {
    console.log('all done')
 })

 
.catch((error) => {  
    console.log("An error occurred: ", error)  
})  