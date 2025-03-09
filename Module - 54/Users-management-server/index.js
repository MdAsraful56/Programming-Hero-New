const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 28 },
    { id: 4, name: "David Williams", email: "david@example.com", age: 35 },
    { id: 5, name: "Emma Wilson", email: "emma@example.com", age: 22 },
    { id: 6, name: "Frank Miller", email: "frank@example.com", age: 40 },
    { id: 7, name: "Grace Lee", email: "grace@example.com", age: 27 },
    { id: 8, name: "Hannah White", email: "hannah@example.com", age: 32 },
    { id: 9, name: "Ian Green", email: "ian@example.com", age: 29 },
    { id: 10, name: "Jack Black", email: "jack@example.com", age: 33 }
];


app.get('/', (req, res) => {
    res.send('Users management server......');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log('User Data Post');
    console.log(req.body);
});


app.listen(port, () => {
    console.log(`Users Management Server on Running.... ${port}`)
});
