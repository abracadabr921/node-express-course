const { createReadStream } = require('fs')


const stream = createReadStream('../content/big.txt', {
    encoding: 'UTF-8',
    highWaterMark: 200

})


stream.on('data', (result) => {
    console.log(result)
  })
  stream.on('error', (err) => console.log(err))