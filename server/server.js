const express = require('express')
var cors = require('cors');
const app = express()
const port = 3000;

app.use(cors())

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
// app.get('/bugatti-obj', (req, res) => res.sendFile('./index.html'));
app.get('/bugatti-obj', (req, res) => res.download(__dirname + '/bugatti.obj'));

app.get('/bugatti-mtl', (req, res) => res.download(__dirname + '/bugatti.mtl'));
app.get('/pattern', (req, res) => res.download(__dirname + '/pattern-se-image.patt'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))