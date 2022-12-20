//Requirements
const fs = require('fs');
const storedData = require('./db/db.json');


//Exporting api route function
module.exports = function(app) {

    //Takes data and puts it into DB(Database)
    function writeToDB(notes) {

        //Converts data back to string
        notes = JSON.stringify(notes);
        //console.log(notes);

        //Writes the string back into the notes database
        fs.writeFileSync('./db/db.json', notes, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    }

    //GET route to return all notes to database
    app.get('/api/notes', function(req, res) {
        res.json(storedData);
    });

    //POST route to add all notes
    app.post('/api/notes'. function(req, res) {

        //Gives each note an ID
        if (storedData.length == 0)
    })

    //display note from file

    //add it to html


};