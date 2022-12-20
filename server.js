//Express and Path
const express = require('express');
const path = require('path');

//Linking each file in Routes folder
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Creating an express server
const app = express();

//Sets PORT
const PORT = process.env.PORT || 3001;

//Reads URL or JSON files/data
app.use(express.urlencoded({ extende: true }));
app.use(express.json());

//Uses public folder
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Listener
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!`);
});
