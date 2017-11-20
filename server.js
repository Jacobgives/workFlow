const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8888;

const app = express();

app.use(express.static(path.join(__dirname, './notes/dist')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}!`)
});
