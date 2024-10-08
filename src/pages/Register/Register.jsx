import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const newUserInfo = { name, email, photo, password };
        console.log(newUserInfo);

        // password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            setError("Password must be an uppercase, a lowercase, minimum 6 characters long");
        }
        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);

                    setError("");

                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully created your account!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });

                    form.reset();
                    navigate("/");

                    // updateProfile(auth.currentUser, {
                    //     displayName: name, photoURL: photo
                    // })
                    //     .then(() => {
                    //         console.log("profile updated");
                    //     })
                    //     .catch(error => {
                    //         console.log(error);
                    //     })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="lg:text-5xl text-2xl font-bold">Please Register!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    {/* login form */}
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <small className='text-red-500 text-center my-2'>{error}</small>
                            <label className="label">
                                <a href="/login" className="label-text-alt link link-hover">Already have account? Login!</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;