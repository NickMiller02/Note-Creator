//Requirements
const fs = require('fs');
const storedData = require("../db/db.json");


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
    app.post('/api/notes', function(req, res) {

        //Gives each note an ID
        if (storedData.length === 0) {
            req.body.id = '0';
        } else {
            req.body.id = JSON.stringify(JSON.parse(storedData[storedData.length - 1].id) + 1);
        }

        console.log(`req.body.id: ${req.body.id}`);

        //Pushes body to collect
        storedData.push(req.body);

        //Writes note to Database and console logs
        writeToDB(storedData)
        console.log(storedData);

        //Returns new note to JSON
        res.json(req.body);
    });

    //Delete method to search and delete a specific note
    app.delete("/api/notes/:id", function(req, res) {
        notes.splice(req.params.id, 1);
        writeToDB();
        console.log("Deleted note with id "+req.params.id);
    });
};

