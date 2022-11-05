const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const movieId = req.params.id;
  const queryText = `
    SELECT "genres"."name" 
    FROM "genres"
    JOIN
      "movies_genres" ON "movies_genres"."genres_id" = "genres"."id"
    JOIN
      "movies" ON "movies_genres"."movie_id" = "movies"."id"
    WHERE "movies"."id" = $1;
  `;

  pool.query(queryText, [movieId])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.log('Error in genre router', err);
      res.sendStatus(500);
    })
});

module.exports = router;