import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = () => {
   
    const {
        register,
        handleSubmit, formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
         const regex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(password.match(regex)){
            toast.success('ok done for pass')
        }else{toast.error(`One Uppercase
        One lowercase,
        One Numeric,One
        Special Character
        and minimum 8 character

        `)}
        if(email.includes('@gmail.com')){
            console.log('ok done email is right')

        }
        else{
           toast.error('type (@gmail.com)')
        }
      };
    return (
        <div>
            <form  class=" min-h-screen bg-base-200 pt-32" onSubmit={handleSubmit(onSubmit)}>
                <div class="">
                    <div class="rounded-lg w-4/4 sm:w-3/4 md:w-2/4 mx-auto  lg:w-2/4 xl:w-1/4 shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email Id</span>
                                </label>
                                <input type="text" {...register('email')} placeholder="Enter You Email Id" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password')} placeholder="Enter Your password" class="input input-bordered" />
                                <label class="label">
                                    <p href="#" class=" label-text-alt link link-hover">Forgot password?</p>
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

export default Login;