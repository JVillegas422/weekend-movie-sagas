import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

// Matieral UI Imports
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

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
                <Grid container spacing={2} justify="center" alignItems="center">
                <ImageList 
                    gap={15} cols={4}
                    sx={{m:1, width:'65%', pl:'20%', pt:'4%'}}>
                    {movies.map((movie) => (
                        <Card key={movie.id}
                            sx={{ p: 2, bgcolor: 'darkgrey' }}
                        >
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
                                sx={{ mx: 'auto' }}
                            />
                        </Card>
                    ))}
                </ImageList>
                </Grid>
            </div>
        </main>
    );
}

export default MovieList;