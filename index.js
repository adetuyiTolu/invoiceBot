const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.send(200);
});

app.listen(port, ()=>{
  console.log("server started at port 8080");
});
