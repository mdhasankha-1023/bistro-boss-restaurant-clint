import { useContext } from 'react';
import signUpImg from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProviders';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';


const Registration = () => {
    const { signUp } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        const { email, password } = data;

        signUp(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                reset()
                navigate('/login')

            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row max-w-screen-lg mx-auto border-4 shadow-2xl">
                <div className="text-center lg:text-left">
                    <img src={signUpImg} alt="" />
                </div>
                <div className="card  w-full max-w-lg py-6 px-8">
                    <h2 className='text-center text-4xl font-bold'>Registration!!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body pt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name <span className='text-red-700 text-xl'>*</span></span>
                                </label>
                                <input type="text" placeholder="type your name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email <span className='text-red-700 text-xl'>*</span></span>
                                </label>
                                <input type="text" placeholder="type your email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Password is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password
                                    <span className='text-red-700 text-xl'>*</span></span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="type your password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600'>Password is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL <span className='text-red-700 text-xl'>*</span></span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="type your photo URL" className="input input-bordered" />
                                {errors.password && <span className='text-red-600'>Photo URL is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054]  hover:bg-[#D1A054] border-0 " type="submit" value="Registration" />
                            </div>
                        </div>
                    </form>
                    <p className='text-xl text-[#bd8e49] text-center'>Already registered? <Link to='/login' className='font-bold'>Go to login</Link> </p>
                    <p className='text-center my-5 text-xm font-medium'>Or Registration with</p>
                    <div className='flex text-4xl justify-between w-3/6 mx-auto'>
                        <FaFacebook className='me-3'></FaFacebook>
                        <FaGoogle className='me-3'></FaGoogle>
                        <FaGithub className='me-3'></FaGithub>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;