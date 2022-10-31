INSERT INTO movies (movie_name)
VALUES  ("Lord of the Rings"),
        ("Spider-man"),
        ("It"),
        ("The Super Mario Bros. Movie"),
        ("The Shining");

INSERT INTO reviews (movie_id, review)
VALUES  (1,"8/10 kinda long"),
        (2,"10/10 it was okay"),
        (3,"1/10 amazing"),
        (4,"who watched this"),
        (5,"Jack Nicholson");

SELECT * FROM movies;
SELECT * FROM reviews;