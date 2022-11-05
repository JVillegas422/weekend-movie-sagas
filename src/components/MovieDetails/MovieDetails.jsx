import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function MovieDetails() {
    console.log('in MovieDetails');
    
    const movieDetails = useSelector(store => store.movieDetails);
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
            <Button variant="contained" color="success" onClick={handleClick}>
                Home Page
            </Button>

            <h3>Movie Details:</h3>
            <Grid container spacing={0} direction="column" alignItems="center"
                justify="center" style={{ minHeight: '100vh' }}>
                
                <Card variant="outlined" sx={{ maxWidth: '40rem', mt: '5%' }}>
                <section>
                    <Grid item>
                        {movieDetails.map(movie => {
                            return (
                                <div key={movie.id} >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {movie.title}
                                    </Typography>
                                    <img src={movie.poster} alt={movie.title} />
                                        <p>{movie.description}</p>
                                    </div>
                                );
                            })}
                    </Grid>
                </section>
                </Card>
            </Grid>

            {/* {movieDetails.map(movie => {
                return (
                    <div key={movie.id} >
                        {movie.title}
                        <img src={movie.poster} alt={movie.title} />
                        <p>{movie.description}</p>
                    </div>
                )
            })} */}
        </>
    );
}

export default MovieDetails;