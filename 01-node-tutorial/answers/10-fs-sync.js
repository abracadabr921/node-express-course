const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const first = writeFileSync('./temporary/fileA.txt', 'utf8')
const second = writeFileSync('./temporary/fileA.txt', 'utf8')
const third = writeFileSync('./temporary/fileA.txt', 'utf8')

const a = readFileSync('./temporary/fileA.txt', 'utf8')
const b = readFileSync('./temporary/fileA.txt', 'utf8')
const c = readFileSync('./temporary/fileA.txt', 'utf8')

writeFileSync(
  './temporary/result.txt',
  `Here is the result : ${a}, ${b}, ${c}`,
  { flag: 'a' }
)

console.log('finished')