import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import { searchMovies, getPopularMovies } from "../service/api"

const Home = () => {

    const [searchQuery, setsearchQuery] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])



    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)

        } catch (err) {
            console.log(err);
            setError("Failed to search movies...")

        } finally {
            setLoading(false)

        }
    }

    return (
        <div className='bg-black w-full min-h-screen p-5'>
            <form onSubmit={handleSearch} >
                <div className='w-full flex justify-center gap-5  items-center mb-5'>
                    <input className='bg-mist-50 w-[60%] h-[50px] border-none rounded-4xl pl-5 outline-none'
                        type="text"
                        placeholder='Search your favourate movies'
                        value={searchQuery}
                        onChange={(e) => setsearchQuery(e.target.value)}


                    />

                    <button className='w-[20%] cursor-pointer hover:bg-lime-200/90 border-none outline-none font-bold text-lg h-[50px] bg-lime-200 rounded-3xl ' type='submit'>Search</button>
                </div>


            </form>

            {error && <div>{error}</div>}


            {loading ? (
                <div className=''>Loading...</div>
            ) : (
                <div className="flex flex-row gap-5 flex-wrap justify-center">
                    {movies.map(
                        (movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                </div>
            )}

        </div>
    )
}

export default Home