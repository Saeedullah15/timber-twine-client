import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
    const { user, setLoading } = useContext(AuthContext);
    // console.log(user);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-art-and-craft-items">All Art & Craft Items</NavLink></li>
        <li><NavLink to="/add-craft-item">Add Craft Item</NavLink></li>
        <li><NavLink to="/my-art-and-craft-list">My Art & Craft List</NavLink></li>
    </>

    const handleLogout = (e) => {
        setLoading(true);

        signOut(auth)
            .then(result => {
                console.log("logged out successfully");
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged out!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    {/* logo for large device */}
                    <a className="md:text-2xl w-52 mr-20 font-bold hidden md:block">
                        <Typewriter
                            words={['Timber & Twine']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </a>
                    {/* toggle light and dark mode */}
                    <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="night" className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>


                {/* large device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* login & register */}
                <div className="navbar-end space-x-2">
                    {
                        user ?
                            <>
                                <div className="tooltip tooltip-bottom z-10" data-tip={user.displayName === null ? "name not set yet" : user.displayName}>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user.photoURL === null ? "https://cdn-icons-png.flaticon.com/512/2919/2919906.png" : user.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="btn mb-1">Log Out</button>
                            </>
                            :
                            <>
                                <Link to="/login"><button className="btn">Login</button></Link>
                                <Link to="/register"><button className="btn">Register</button></Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;