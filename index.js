const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('This response is from server!');
})
users = [
    {id:1, name:'Shabana', email:'shab@ana.com'},
    {id:2, name:'Shabiha', email:'shab@iha.com'},
    {id:3, name:'Shabnoor', email:'shab@noor.com'}
]
app.get('/users', (req,res)=>{
    res.send(users);
})
app.listen(port, ()=>{
    console.log(`Users server is running on port: ${port}`)
})