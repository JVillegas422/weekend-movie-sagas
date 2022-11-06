import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <Typography variant='h3' mt={4} sx={{ p: 2, m: 0 }}>
        The Movies Saga!
      </Typography>

      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
          <Route path='/movieDetails' exact>
            <MovieDetails />
          </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
