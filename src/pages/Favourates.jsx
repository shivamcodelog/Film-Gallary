import React from "react";

import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourates =()=>{

    const { favorites } = useMovieContext();
 
    if (favorites && favorites.length > 0) {
        return (
            <div className="p-8">
                <h2 className="text-white text-3xl font-bold mb-6 text-center">Your Favorite Movies</h2>
                <div className="flex flex-row gap-5 flex-wrap justify-center">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }



    return(
    <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-mist-500 text-3xl">No Favourate Movies Yet</h2>
        <p className="text-mist-500 text-2xl">Start adding movies to your Favorites and they will appear here </p>
    
    </div>

)}

export default Favourates