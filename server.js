const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: 'API ON'
    })
})

app.listen(8888, () => console.log('API LISTEN ON PORT 8888'))