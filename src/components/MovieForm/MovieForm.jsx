import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './MovieForm.css'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';


 function MovieForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const genres = useSelector(store => store.genres);
    const [newMovie, setNewMovie] = useState({});
    
    const handleNewMovie = (evt) => {
        setNewMovie({ ...newMovie, [evt.target.name]: evt.target.value })
    }

    const addNewMovie = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_NEW_MOVIE',
            payload: newMovie
        })
        history.push('/');
    }
    
    
  return (
    <>
        <Typography variant='h3' mt={2} sx={{ p: 3 }}>
            Add a new movie
        </Typography>     

        <Box 
            component="form" 
            mx={'auto'}
            sx={{ 
                '& .MuiTextField-root': { p: 6, width: '18rem', height: '4rem' ,bgcolor: 'white',  },
                color: 'text.primary'
            }}
            noValidate
            autoComplete="off"
            onSubmit={(event) => addNewMovie(event)}
        >
            <FormControl
                sx= {{ bgcolor: 'grey.400'}}
            >
            <TextField
                required
                id="filled-required"
                label="Movie Title"
                placeholder="Movie Title"
                variant="filled"
                onChange={handleNewMovie}
                name="title"
            />

            <TextField
                required
                id="filled-required"
                label="Movie Poster URL"
                placeholder="Movie Poster URL"
                variant="filled"
                onChange={handleNewMovie}
                name="poster"
            />

            <TextField
                required
                id="filled-required"
                label="Move Description"
                placeholder="Description"
                variant="filled"
                onChange={handleNewMovie}
                name="description"
            />

            {/* 
                Need to add in the list of genres 
                for user to select 
            */}
            
            {/* <TextField
                id="filled-select-currency"
                select
                label="Movie Genre"
                variant="filled"
                onChange={handleNewMovie}
                name="genre_id"
                value={newMovie.genre}
            /> */}
           

            <Button
                type="submit"
                variant="contained"
                sx={{ p: 2 }}
            >
                Save Movie
            </Button>
            </FormControl>
            
        </Box>

        <Typography variant='h5' mt={2} sx={{ p: 3 }}>
            Changed your mind? Click cancel
        </Typography> 

        <Button 
            type="submit"
            variant="contained"
            sx={{ p: 2 }}
            mb={2}
            onClick={() => { history.push('/')}}
        >
            Cancel
        </Button>
    </>
    
  );
}

export default MovieForm;