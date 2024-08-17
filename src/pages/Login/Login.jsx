import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import Swal from 'sweetalert2';
import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = { email, password };
        console.log(userInfo);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged in!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });

                form.reset();
            })
            .catch(error => {

                console.log(error);

                Swal.fire({
                    title: 'Error',
                    text: 'invalid auth credentials',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });

                form.reset();
            })
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged in!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = (e) => {
        e.preventDefault();

        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged in!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    {/* login form */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/register" className="label-text-alt link link-hover">Don't have account? Register!</a>
                            </label>
                            <div className='flex gap-4 justify-center items-center mt-5'>
                                <FcGoogle onClick={handleGoogleLogin} className='text-4xl cursor-pointer' />
                                <SiGithub onClick={handleGithubLogin} className='text-3xl cursor-pointer' />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;