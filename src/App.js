import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import {movieData} from "./data"

function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("")
  const [filterRating, setFilterRating] = useState(0)
  
  return (
    <div className="">
     <Filter filterRating={filterRating} setFilterRating={setFilterRating} setFilterTitle={setFilterTitle}/>
     <MovieList movies = {movies} filterTitle={filterTitle} filterRating={filterRating} setMovies={setMovies}/>
    </div>
  );
}

export default App;
