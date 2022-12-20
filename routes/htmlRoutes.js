//Requires Path
const path = require('path');

//Exports the HTML route function
module.exports = function(app) {

    //Routes for notes page
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //Routes for index page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};