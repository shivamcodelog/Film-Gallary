import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favourates from './pages/Favourates'
import Navbar from './components/Navbar'
import {MovieProvider} from './context/MovieContext'

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <MovieProvider>
        <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourates' element={<Favourates/>}/>
      </Routes>
    </main>
      </MovieProvider>
    </div>
  )
}

export default App