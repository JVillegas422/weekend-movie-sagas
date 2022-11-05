import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

function MovieDetails() {
    console.log('in MovieDetails');
    
    const movieDetails = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
        <button onClick={handleClick}>Home Page</button>
            <h3>Movie Details:</h3>

            <div key={movieDetails.id}>
                <h3>{movieDetails.title}</h3>
                <img
                    src={movieDetails.poster} alt={movieDetails.title} />
                <p>{movieDetails.description}</p>
            </div>

            <h3>Movie Genre</h3>
            <p>{genres.name}</p>
            {genres.map((genre, index) => {
                return (
                    <p key={index}>{genre.name}</p>
                )
            })}
        </>
    );
}

export default MovieDetails;