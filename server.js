//Express and Path
const express = require('express');
const path = require('path');

//Creating an express server
const app = express();

//Sets PORT
const PORT = process.env.PORT || 3001;

//Reads URL or JSON files/data
app.use(express.urlencoded({ extende: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Linking and using routes files
require('./routes/routes')(app);

//Listener
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!`);
});