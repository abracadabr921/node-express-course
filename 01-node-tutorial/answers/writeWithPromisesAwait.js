const { writeFile, readFile } = require("fs").promises;

let writer = async () => {
    


    try {
        result = await writeFile('./temp.txt', 'hello', { flag: 'a' })
        console.log("done to write")
     } catch(err) {
         console.log("An error occurred: ", err)
     }

    
    
}

let reader = async () => {


    try {
        result = await readFile('./temp.txt',)
        console.log("done to read")
     } catch(err) {
         console.log("An error occurred: ", err)
     }

}

let readWrite = async () => {
    await reader();
    await writer();
}

readWrite();