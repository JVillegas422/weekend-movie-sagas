import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


 function MovieForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(store => store.genres);
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
        <Typography variant='h3' mt={4} >
            MovieForm
        </Typography>
    </>
    
  );
}

export default MovieForm;