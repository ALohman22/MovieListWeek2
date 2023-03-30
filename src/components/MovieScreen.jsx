import React from "react"
import MovieCard from "./MovieCard"

const MovieScreen = ({addMovie, removeMovie ,list , page, setPage, movieList}) => {
console.log(page)

    const movieDisplay = movieList.map((movie, index)=>{
    return <MovieCard key={movie.id} removeMovie={removeMovie} addMovie={addMovie} movie={movie} list={list}/>
    
})
const decrement = () => setPage(page - 1)
const increment = () => setPage(page + 1)   
return (
        <div className="page">
            <h1>Andrew's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div  className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen