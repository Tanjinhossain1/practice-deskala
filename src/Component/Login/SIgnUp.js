import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const SIgnUp = () => {
    const [
        createUserWithEmailAndPassword,

    ] = useCreateUserWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit, formState: { errors },
    } = useForm();
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const onSubmit = (data, event) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        const phoneNumber = data.phoneNumber;
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        const userDetail = { email, password, phoneNumber }
        if (email.includes('@gmail.com')) {
            if (phoneNumber.length <= 10) {
                if (password.match(regex)) {
                    createUserWithEmailAndPassword(email, password)
                    fetch('https://murmuring-plateau-96654.herokuapp.com/userCreate', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ userDetail })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('user created and set Database')
                                navigate(from, { replace: true });
                            }
                        })
                    event.target.reset()

                } else {
                    toast.error(`One Uppercase
            One lowercase,
            One Numeric,One
            Special Character
            and minimum 8-9 character
            `)
                }
            } else {
                toast.error('Mobile number should be with 10 digit')
            }
        }
        else {
            toast.error('type (@gmail.com)')
        }
    };
    return (
        <div>
            <form className=" min-h-screen bg-base-200 pt-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="rounded-lg w-4/4 sm:w-3/4 md:w-2/4 mx-auto  lg:w-[500px] xl:w-[500px] shadow-2xl bg-base-100">
                        <h1 className='pt-8 text-2xl font-bold text-center'>SignUp</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Id</span>
                                </label>
                                <input type="text" {...register('email')} placeholder="Enter You Email Id" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" {...register('phoneNumber')} placeholder="Enter Your Phone Number" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password')} placeholder="Enter Your password" className="input input-bordered" />
                                <label className="label">
                                    <p href="#" className=" label-text-alt link link-hover">Forgot password?</p>
                                </label>
                                <label className="label">
                                    <p href="#" className=" label-text-alt link link-hover">Already have an Account? <Link to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-2/4 mx-auto btn border-0 hover:bg-blue-500 bg-blue-500">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SIgnUp;