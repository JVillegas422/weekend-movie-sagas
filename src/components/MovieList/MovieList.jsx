import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

// Matieral UI Imports
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    // On page load get all movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movieId) => {
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieId
        })
        history.push('/movieDetails');
    }

    return (
        <main>
            <div>
                <Grid container justify="center" alignItems="center">
                <ImageList 
                    gap={15} cols={3}
                    sx={{m:1, width:'50%', pl:'25%', pt:'2%'}}>
                    {movies.map((movie) => (
                        <ImageListItem key={movie.id}>
                            <img
                                src={movie.poster}
                                srcSet={movie.poster}
                                alt={movie.title}
                                loading="lazy"
                                onClick={event => handleClick(movie.id)}
                            />
                            <ImageListItemBar
                                title={movie.title}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                </Grid>
            </div>
        </main>
    );
}

export default MovieList;