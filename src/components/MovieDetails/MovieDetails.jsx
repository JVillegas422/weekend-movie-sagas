import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

function MovieDetails() {
    console.log('in MovieDetails');
    
    const movieDetails = useSelector(store => store.movieDetails);
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
        <button onClick={handleClick}>Home Page</button>
            <h3>Movie Details:</h3>
            {movieDetails.map(movie => {
                return (
                    <div key={movie.id} >
                        {movie.title}
                        <img src={movie.poster} alt={movie.title} />
                        <p>{movie.description}</p>
                    </div>
                )
            })}

        </>
    );
}

export default MovieDetails;