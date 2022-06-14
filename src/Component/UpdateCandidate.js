import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './firebase.init';

const UpdateCandidate = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams()
    const {
        register,
        handleSubmit, formState: { errors },
    } = useForm();
    const userEmail = user?.email
    const onSubmit = (data,event) => {
        fetch(`http://localhost:4000/updateCandidate/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data , userEmail })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result.acknowledged){
                    toast.success('Update Candidate Complete')
                }
                event.target.reset()
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-12 md:w-4/4 lg:w-2/4 rounded-md mx-auto shadow-2xl p-6'>
            <input   {...register('email')} type="text" placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs hidden" defaultValue={user?.email} />
                <div className='grid md:grid-cols-2 gap-12'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input required {...register('name')} type="text" placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input required {...register('address')} type="text" placeholder="Enter Your Address" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Date Of Birth</span>
                        </label>
                        <input required {...register('birthDate')} type="date" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* select state  */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">State</span>
                        </label>
                        <select {...register('state')} class="select select-bordered">
                            <option disabled selected>Select Your State</option>
                            <option>USA</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    {/* end select state  */}

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Age</span>
                        </label>
                        <input required {...register('age')} type="number" placeholder="Enter Your Age" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Pin-Code</span>
                        </label>
                        <input required {...register('pinCode')} type="number" placeholder="Enter Your 6-Digit Pin Code" class="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='lg:flex justify-end gap-8 mt-6'>
                    <p class="  px-6 hover:bg-info font-bold border-2 border-info hover:text-white text-xl rounded-md w-2/4 mb-6 md:w-1/4 md:mb-8 lg:mb-0 text-center cursor-pointer lg:w-1/4 py-3">Cancel</p>
                    <button class=" px-6 bg-info font-bold text-white text-xl rounded-md lg:w-1/4 py-3">Update</button>
                </div>
            </form>
        </div>
    )
};

export default UpdateCandidate;