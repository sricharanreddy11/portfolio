import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="background sticky top-0 w-full h-16 flex justify-center items-center">
          <nav className="bg-zinc-800 h-8 w-8/12 md:w-4/12 flex justify-evenly items-center px-3 shadow-md rounded-full hover:shadow-lg">
            <Link to="/" className="text-white font-sans text-pretty hover:underline">Home</Link>
            <Link to="/career" className="text-white font-sans text-pretty hover:underline">Career</Link>
            <Link to="/projects" className="text-white font-sans text-pretty hover:underline">Projects</Link>
            <Link to="/about" className="text-white font-sans text-pretty hover:underline">About</Link>
          </nav>
    </header>
  )
}

export default Navbar
