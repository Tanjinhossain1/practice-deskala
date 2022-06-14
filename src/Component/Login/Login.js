import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link,useNavigate,useLocation  } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);
      let navigate = useNavigate();
      let location = useLocation();
    
      let from = location.state?.from?.pathname || "/";
      if(user){
        navigate(from, { replace: true });
      }
    const {
        register,
        handleSubmit, formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
         const regex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
       
        if(email.includes('@gmail.com')){
            console.log('ok done email is right')
            if(password.match(regex)){
                toast.success('ok done for pass')
                signInWithEmailAndPassword(email,password)

            }else{toast.error(`One Uppercase
            One lowercase,
            One Numeric,One
            Special Character
            and minimum 8-9 character
            `)}
        }
        else{
           toast.error('type (@gmail.com)')
        }
      };
    return (
        <div>
            <form  class=" min-h-screen bg-base-200 pt-28" onSubmit={handleSubmit(onSubmit)}>
                <div class="">
                    <div class="rounded-lg w-4/4 sm:w-3/4 md:w-2/4 mx-auto  lg:w-2/4 xl:w-1/4 shadow-2xl bg-base-100">
                <h1 className='text-2xl text-center font-bold pt-8'>Login</h1>
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
                                <label class="label">
                                    <p href="#" class=" label-text-alt link link-hover">Don't have an Account? <Link className='text-purple-600 hover:text-purple-600' to='/signUp'>SignUp</Link></p>
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