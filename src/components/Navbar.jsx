import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <nav id="header" className="w-full z-30 top-10 py-4 bg-white shadow-lg border-b border-blue-400">
            <div className="w-full flex items-center justify-between mt-0 px-24 py-2">

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                    <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                        <li><NavLink className="inline-block no-underline  font-medium text-lg px-4 " to="/">Home</NavLink></li>
                        <li><NavLink className="inline-block no-underline  font-medium text-lg px-4 " to="/products">Products</NavLink></li>
                    </ul>
                    </nav>
                </div>
                
                <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div className="auth flex items-center w-full md:w-full">
                    <Link to={"/login"}>
                     <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
                    </Link>
                    <Link to={'/signUp'}>
                    <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )

}

export default Navbar