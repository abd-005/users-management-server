const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('This response is from server!');
})

app.listen(port, ()=>{
    console.log(`Users server is running on port: ${port}`)
})