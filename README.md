# list-api

This is a basic REST API made using Node.JS, Express, and MongoDB. 

How to use this? 

Clone the repository. Install mongodb on your machine, using the instructions [found here](https://docs.mongodb.com/manual/installation/).
(If you are on Windows you may need to edit your path variables to allow mongo/mongod to be run from the command line.)

run `$ npm install` in the root of the repository.

Create a directory named 'data' within the root of the repository, then a subdirectory called 'db'.

Open a command prompt at the root of your directory, and type the following command:
`$ mongod --dbpath .\data\db`
If you installed mongodb correctly, you will receive a lot of logs to the console, _the process will stay running_.

Open a new command prompt (leave the old running) in the new one, start your server using: 
`$ node server.js`

You should get a response "We are live on 8000." This is the port set in your server.js file.

#REST
You can make HTTP requests to localhost:8000/notes. 

GET: `http://localhost:8000/notes/[noteid]`
POST: `http://localhost:8000/notes` your content type should be application/json and your body should include an object with {"text":[your text],"title":[your title]}.
PUT: `http://localhost:8000/notes/[noteid]` same as post, but your body may include text _and/or_ title key value pairs.
DELETE: `http://localhost:8000/notes/[noteid]` will delete the note with the id specified.
