import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-art-and-craft-items">All Art & Craft Items</NavLink></li>
        <li><NavLink to="/add-craft-item">Add Craft Item</NavLink></li>
        <li><NavLink to="/my-art-and-craft-list">My Art & Craft List</NavLink></li>
    </>

    return (
        <nav>
            {/* logo for small device */}
            <a className="md:text-2xl font-bold md:hidden block text-center p-2 bg-lime-100">Timber & Twine</a>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* small device */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    {/* logo for large device */}
                    <a className="md:text-2xl font-bold hidden md:block">Timber & Twine</a>
                </div>

                {/* large device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* login & register */}
                <div className="navbar-end space-x-2">
                    <Link to="/login"><button className="btn">Login</button></Link>
                    <Link to="/register"><button className="btn">Register</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;