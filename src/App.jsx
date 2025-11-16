
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pagesOutlet/HomePage';
import LayoutOutlet from '../layout/LayoutOutlet';
import MovieList from '../pagesOutlet/MoviesList';
import MovieDetails from '../pagesOutlet/MovieDetails'
import MoviesCard from '../components/MoviesCard';


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<LayoutOutlet />}>

            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MovieList />} />
            <Route path='/movies/:id' element={<MovieDetails />} />
          </Route>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
