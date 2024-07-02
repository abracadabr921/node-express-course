console.log('Express Tutorial')


const express = require('express')
const { products } = require("./data")

const app = express()

app.use(express.static("./public"))

app.get('/api/v1/test', (req,res)=>{
    res.json({ message: "It worked!" })

})
app.get('/api/v1/products', (req, res)=>{
    res.json(products)
})
app.get('/api/v1/products/:productID', (req, res)=>{

    if(!parseInt(req.params.productID)) return res.status(404).json({ message: "that product was not found."})
    

    const idToFind = parseInt(req.params.productID)
    const product = products.find((p) => p.id === idToFind)

    if(!product) return res.status(404).json({ message: "that product was not found."})

    res.json(product) 
})

app.get('/api/v1/query', (req, res)=>{

    let result

    if(!req.query.max_price){
        const productFilter = products.filter((p) => p.name.includes(req.query.search))
        result = productFilter.slice(0, req.query.limit)
    }
    if(!req.query.search){
        result = products.filter((p) => p.price < parseInt(req.query.max_price))
    }

    res.send(result)
})



app.all('*', (req,res)=>{
    res.send('Error 404')
})

app.listen(3000)
