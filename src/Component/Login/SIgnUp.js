import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const SIgnUp = () => {

    const {
        register,
        handleSubmit, formState: { errors },
    } = useForm();
    const onSubmit = (data,event) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        const phoneNumber = data.phoneNumber;
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        const userDetail = {email,password,phoneNumber}
        if (email.includes('@gmail.com')) {
            if (phoneNumber.length <= 10) {
                if (password.match(regex)) {
                    fetch('http://localhost:4000/userCreate',{
                        method: 'PUT',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body:JSON.stringify({userDetail}) 
                    })
                    .then(res=>res.json())
                    .then(data=> {
                        if(data.acknowledged){
                            toast.success('user created and set Database')
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
            <form class=" min-h-screen bg-base-200 pt-8" onSubmit={handleSubmit(onSubmit)}>
                <div class="">
                    <div class="rounded-lg w-4/4 sm:w-3/4 md:w-2/4 mx-auto  lg:w-[500px] xl:w-[500px] shadow-2xl bg-base-100">
                        <h1 className='pt-8 text-2xl font-bold text-center'>SignUp</h1>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email Id</span>
                                </label>
                                <input type="text" {...register('email')} placeholder="Enter You Email Id" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="number" {...register('phoneNumber')} placeholder="Enter Your Phone Number" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password')} placeholder="Enter Your password" class="input input-bordered" />
                                <label class="label">
                                    <p href="#" class=" label-text-alt link link-hover">Forgot password?</p>
                                </label>
                                <label class="label">
                                    <p href="#" class=" label-text-alt link link-hover">Already have an Account? <Link to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="w-2/4 mx-auto btn border-0 hover:bg-blue-500 bg-blue-500">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SIgnUp;