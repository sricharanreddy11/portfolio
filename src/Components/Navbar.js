import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-gray-100 sticky top-0 w-full h-16 flex justify-center items-center">
          <nav className="bg-white h-8 w-8/12 md:w-4/12 flex justify-evenly items-center px-3 shadow-md rounded-full hover:shadow-lg">
            <Link to="/" className="text-gray-900 font-sans text-pretty hover:underline">Home</Link>
            <Link to="/career" className="text-gray-900 font-sans text-pretty hover:underline">Career</Link>
            <Link to="/projects" className="text-gray-900 font-sans text-pretty hover:underline">Projects</Link>
            <Link to="/about" className="text-gray-900 font-sans text-pretty hover:underline">About</Link>
          </nav>
    </header>
  )
}

export default Navbar
