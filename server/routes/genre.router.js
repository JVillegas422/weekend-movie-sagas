const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Keeping this commented out until
// base mode has been completed
router.get('/:movieId', (req, res) => {
  // Add query to get all genres
  // const movieId = req.params.movieId;
  
  const queryText = `
    SELECT "genres"."name" 
    FROM "genres"
    JOIN
      "movies_genres" ON "genres"."id" = "movies_genres"."genres_id"
    JOIN
      "movies" ON "movies_genres"."movie_id" = "movies"."id"
    WHERE "movies"."id" = $1;
  `;

  pool.query(queryText, [req.params.movieId])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.log('Error in genre router', err);
      res.sendStatus(500);
    })
    // res.sendStatus(500);
});

module.exports = router;