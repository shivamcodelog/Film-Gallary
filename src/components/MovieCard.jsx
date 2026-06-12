import React from 'react'
import { Heart } from 'lucide-react';
import { MovieProvider, useMovieContext } from '../context/MovieContext';
import Favourates from '../pages/Favourates';

const MovieCard = ({ movie }) => {

   const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()

   const favorite = isFavorite(movie.id)

  function onFavoriteClick(e) {
    e.preventDefault()
    if(favorite) removeFromFavorites(movie.id)
      else addToFavorites(movie)
  }



  return (
    
      <div>
        <div className="bg-fuchsia-200 hover:bg-fuchsia-300 relative   w-[250px] h-[350px] rounded-2xl p-2">
        <div className=" ">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-[100%] object-cover rounded-2xl h-[270px]  ' />
          <div className=' absolute top-4 right-4  '>
            <button  className="backdrop-blur cursor-pointer transform-all transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/20"   onClick={onFavoriteClick}>

              <Heart
              size={24}
              fill={favorite ? "red":"none"}
              color={favorite ? "red":"white"}
              
              />

            </button>
          </div>

        </div>

        <div className="flex justify-between flex-row pl-1">
          <h3 className='font-bold text-2xl'>{movie.title}</h3>
          <p className='font-medium text-2xl'>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
      </div>
    
  

  )
}

export default MovieCard