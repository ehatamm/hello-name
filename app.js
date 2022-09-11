const express = require('express')
const app = express()
const port = 3000

const instructionsHeader = '<h3>Instructions</h3>'
const instructions = '<p>Send a GET request to "https://hello-itb8201.herokuapp.com/hello/name" where "name" is the' +
    ' name you want to say hello to.</p>';

app.get('/', (req, res) => {
    res.send(instructionsHeader + instructions);
})

app.get('/hello/:name', (req, res) => {
    res.send('Tere,  ' + req.params.name);
})

app.listen(process.env.PORT || port, () => {
    console.log(`Hello app started!`)
})
