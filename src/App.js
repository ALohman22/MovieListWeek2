import './App.css';
import axios from "axios"
import React, {useEffect, useState} from "react"
import MovieScreen from "./components/MovieScreen"
import Watchlist from "./components/Watchlist"
import Header from "./components/Header"

function App() {

const [movieList, setMovieList] = useState([])
const [list, setList] = useState([])
const [watchList, setWatchlist] = useState([])
const [page, setPage] = useState(1)

const addMovie = (movie) => setList([...list, movie])

const removeMovie = (movie) => {
  const newState = list.filter((mov)=> {
    return mov !== movie;
  });
  setList(newState)
}

const getData = () => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=585bc3a6485d97dbd7ef33d8a9320ae3&language=en-US&page=${page}`)
  .then((res)=> {
    // console.log(res.data.results);
    setMovieList(res.data.results);
  });
};

useEffect(()=>{
  getData();
}, [page]);


  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen 
          removeMovie={removeMovie}
          addMovie={addMovie}
          movieList={movieList}
          page={page} 
          setPage={setPage} 
          list={list} 
        />
        <Watchlist removeMovie={removeMovie} list={list}/>
      </main>
    </div>
  );
}

export default App;
