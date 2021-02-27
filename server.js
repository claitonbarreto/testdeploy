const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: 'API ON'
    })
})

app.get('/users', (req,res) => {
    res.json({
        users: [
            {
                name: 'claiton',
                age: 25
            },
            {
                name: 'maria',
                age: 23
            },
            {
                name: 'andré',
                age: 30
            },
        ]
    })
})

app.listen(8888, () => console.log('API LISTEN ON PORT 8888'))