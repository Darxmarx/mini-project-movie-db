// import and require express and mysql2
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000; // port to listen for

const app = express(); // initialize express

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'EveisthEbEst17!',
        database: 'movie_db'
    },
    console.log('Connected to the movie_db database.')
);

// POST route to add a movie to the list

// GET route to render list of all movies

// DELETE route to delete a specific movie based on movie's id

// GET (and join) route that gets all movies and their associated reviews

// PUT route that updates a specific movie's review

// confirms app is listening at specific port
app.listen(PORT, () =>
    console.log(`App listening at http://localhostr:${PORT}`)
);
