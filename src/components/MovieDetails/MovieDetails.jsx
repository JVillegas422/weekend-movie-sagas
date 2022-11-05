import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
    console.log('in MovieDetails');
    const movieDetails = useSelector(store => store.movieDetails);
    const history = useHistory();

    return (
        <>
            <h3>Movie Details:</h3>
        </>
    );
}

export default MovieDetails;