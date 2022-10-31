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
        password: '',
        database: 'movie_db'
    },
    console.log('Connected to the movie_db database.')
);

// POST route to add a movie to the list
app.post('/api/add-movie', (req, res) => {
    const newMovie = {
        id: req.body.id, 
        movie_name: req.body.movie_name
    };
    let sql = `INSERT INTO movies (id, movie_name) VALUES(${id}, ${movie_name})`;
    db.query(sql, function(err, result) {
        if(err) throw err;
        res.send(JSON.stringify(results));
    });
    /*db.query('INSERT INTO movies (id, movie_name) VALUES', newMovie, function(err, results) {
        if(err) throw err;
        res.send(JSON.stringify(results));
    });*/

    /*if (movie_name) {
        const newMovie = {
            id,
            movie_name
        };

        db.query('INSERT INTO movies VALUES(id, movie_name)', function (err, results) {
            console.log(results);
        });
    }*/
});
// GET route to render list of all movies
app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', function(err, results) {
        if(err) throw err;
        res.send(JSON.stringify(results));
    });
});
// DELETE route to delete a specific movie based on movie's id

// GET (and join) route that gets all movies and their associated reviews

// PUT route that updates a specific movie's review

// confirms app is listening at specific port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
