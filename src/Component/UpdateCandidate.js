import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './firebase.init';

const UpdateCandidate = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const {
        register,
        handleSubmit, formState: { errors },
    } = useForm();
    const userEmail = user?.email;
    const navigate = useNavigate()
    const onSubmit = (data, event) => {
        fetch(`https://murmuring-plateau-96654.herokuapp.com/updateCandidate/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data, userEmail })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    toast.success('Update Candidate Complete')
                }
                event.target.reset()
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-12 md:w-4/4 lg:w-2/4 rounded-md mx-auto shadow-2xl p-6'>
                <input   {...register('email')} type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs hidden" defaultValue={user?.email} />
                <div className='grid md:grid-cols-2 gap-12'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required {...register('name')} type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input required {...register('address')} type="text" placeholder="Enter Your Address" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>
                        </label>
                        <input required {...register('birthDate')} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* select state  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">State</span>
                        </label>
                        <select {...register('state')} className="select select-bordered">
                            <option disabled selected>Select Your State</option>
                            <option>Bangladesh</option>
                            <option>Dubai</option>
                            <option>SaudiArab</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    {/* end select state  */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input required {...register('age')} type="number" placeholder="Enter Your Age" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pin-Code</span>
                        </label>
                        <input required {...register('pinCode')} type="number" placeholder="Enter Your 6-Digit Pin Code" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='lg:flex justify-end gap-8 mt-6'>
                    <p  onClick={()=>navigate('/landingPage')} className="  px-6 hover:bg-info font-bold border-2 border-info hover:text-white text-xl rounded-md w-2/4 mb-6 md:w-1/4 md:mb-8 lg:mb-0 text-center cursor-pointer lg:w-1/4 py-3">Cancel</p>
                    <button className=" px-6 bg-info font-bold text-white text-xl rounded-md lg:w-1/4 py-3">Update</button>
                </div>
            </form>
        </div>
    )
};

export default UpdateCandidate;