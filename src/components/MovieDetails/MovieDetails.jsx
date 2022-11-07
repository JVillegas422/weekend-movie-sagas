import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

// Material-UI imports listed down below
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function MovieDetails() {
    console.log('in MovieDetails');
    // Used two selectors to get movie details
    // and movie genre
    const movieDetails = useSelector(store => store.movieDetails);
    const movieGenre = useSelector(store => store.movieGenres);
    const history = useHistory();
    // useHistory to naviagte back to home page 
    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
            <div className="breadCrumbsMenu">
                <Breadcrumbs sx={{ pl:'2%', color: 'white' }} aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        onClick={event => history.push('/')}
                    >
                        Home Page
                    </Link>
                </Breadcrumbs>
            </div>

            <Typography variant='h3' mt={4}>
                Movie Details
            </Typography>

            
            <Grid container direction="column" alignItems="center"
                justify="center" style={{ minHeight: '100vh' }}>
                
                <Card variant="outlined" sx={{ width: '50%', p: 3, mt: '4%', bgcolor: 'grey.400' }}>
                <section>
                    {/* Maps through movieDetails reducer to get movie
                        name and description
                    */}
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
                                    {/* Created second map to get movie genres */}
                                    <Grid item>
                                        <Typography
                                            variant='h5'
                                        >
                                            Movie Genre
                                        </Typography>
                                            {movieGenre.map(genre => {
                                                return (
                                                    <div key={genre.id} >
                                                        <p>{genre.name}</p>
                                                    </div>
                                                 );
                                            })}
                                    </Grid>

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
        </>
    );
}

export default MovieDetails;