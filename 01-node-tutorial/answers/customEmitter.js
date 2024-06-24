const EventEmitter = require("events");  
const emitter = new EventEmitter();  

emitter.on('request', (id) => {
    console.log(`request id: ${id}`)
})


for(let i = 0; i < 10; i++){
    emitter.emit('request', i)
}
