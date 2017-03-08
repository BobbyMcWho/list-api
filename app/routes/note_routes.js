var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

app.get('/notes', (req, res) => {
    let resultsArray = new Array();
    db
            .collection('notes')
            .find().toArray((error,items)=>{
                res.json({"results":items});
            });            
    });

    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db
            .collection('notes')
            .findOne(details, (err, item) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(item);
                }
            });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        let note = {};
        if(req.body.text!=null){
            note.text = req.body.text;
        }

        if(req.body.title!=null){
            note.title = req.body.title;
        }
        
        db
            .collection('notes')
            .findOneAndUpdate(details, {$set:note},{upsert:true}, (err, result) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(result.value);
                }
            });
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db
            .collection('notes')
            .remove(details, (err, item) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(`Note ${id} deleted!`);
                }
            });
    });

    app.post('/notes', (req, res) => {
        const note = {
            text: req.body.text,
            title: req.body.title
        };
        db
            .collection('notes')
            .insert(note, (err, result) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(result.ops[0]);
                }
            });
    });
};
