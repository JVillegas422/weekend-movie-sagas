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
            <Typography variant='h3' mt={4}>
                Movie Details
            </Typography>

            <Grid container direction="column" alignItems="center"
                justify="center" style={{ minHeight: '100vh' }}>
                
                <Card variant="outlined" border-radius sx={{ width: '50%', p: 3, mt: '4%', bgcolor: 'grey.400' }}>
                <section>
                    <Grid item>
                        {movieDetails.map(movie => {
                            return (
                                <div key={movie.id} >
                                    <Typography sx={{ p: 2 }} gutterBottom variant="h4" component="div">
                                        {movie.title}
                                    </Typography>
                                    <img src={movie.poster} alt={movie.title} />
                                    <Typography mt={4} sx={{ p: 3 }} variant="body2" color="text.secondary">
                                        {movie.description}
                                    </Typography>

                                    <Button variant="contained" color="success" onClick={handleClick}>
                                        Home Page
                                    </Button>
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