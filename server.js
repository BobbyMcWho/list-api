const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const routes         = require('./app/routes');
const MongoClient    = require('mongodb').MongoClient;
const assert         = require('assert');
const db             = require('./config/db');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  routes(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})