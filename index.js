const express = require('express');
const bodyParser = require('body-parser');
const verifyController = require('./controllers/verify');
const messageHookController = require('./controllers/messagehook');
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',verifyController);
app.post('/',messageHookController);

app.listen(port, ()=>{
  console.log("server started at port 8080");
});
