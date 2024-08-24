const express = require('express');

const app = express()

app.use('/add-product', (req, res, next) => {
    console.log('this is second page')
    res.send(`
        <form>
            <input type="text" name="title">
            <button>Add Product</button>
            
        </form>`)
})

app.use('/', (req, res, next) => {
    console.log('this is a homepage or something')
    res.send('<h2>homepage or something</h2>')
})


app.listen(3000)