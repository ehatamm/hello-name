const express = require('express')
const app = express()
const port = 3000

const instructions = 'Send a GET request to "https://hello-itb8201.herokuapp.com//hello/name" where "name" is the' +
    ' name you want to say hello to.';

app.get('/', (req, res) => {
    res.send(instructions);
})

app.get('/hello/:name', (req, res) => {
    res.send('Tere,  ' + req.params.name);
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})
