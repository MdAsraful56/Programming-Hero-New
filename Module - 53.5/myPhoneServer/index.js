const express = require('express');
const phones = require('./phones.json');
const app = express()
const port = 5000


app.get('/', (req, res)=>{
    res.send('Phone data is comming sooooooooooon')
});

app.get('/phones', (req, res)=>{
    res.send(phones);
});

app.get('/phones/:id', (req, res)=>{
    const id = req.params.id;
    console.log('I need data for Id: ', id)
    const phone = phones.find(phone => phone.id == id) || {};
    res.send(phone);
})

app.listen(port, ()=>{
    console.log(`My Phone Server is Running on port: ${port}`)
})