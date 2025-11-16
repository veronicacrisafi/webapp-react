
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LayoutOutlet from '../layout/LayoutOutlet';
import MovieList from '../pages/MoviesList';
import MovieDetails from '../pages/MovieDetails'


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<LayoutOutlet />}>

            <Route path='/' element={<HomePage />}></Route>
            <Route path='/movies' element={<MovieList />}></Route>
            <Route path='/movies/:id' element={<MovieDetails />}></Route>

          </Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
