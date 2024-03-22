var  express = require('express')
var cors = require('cors')

const app=express();

app.use(cors());

const port  = process.env.PORT ||  3005;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port , ()=>{
    console.log(`Server is running on ${port}`)
});


