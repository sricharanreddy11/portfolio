import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-gray-100 max-h-screen rounded-lg bottom-0 shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center hover:underline ">© 2024 Sri Charan Reddy
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
                <Link to="/career" className="hover:underline me-4 md:me-6">Career</Link>
            </li>
            <li>
                <Link to="/projects" className="hover:underline me-4 md:me-6">Projects</Link>
            </li>
            <li>
                <Link to="/" className="hover:underline me-4 md:me-6">Contact</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer
