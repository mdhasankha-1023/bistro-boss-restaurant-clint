import './login.css'
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';

const Login = () => {
    const { login, successAlert, errorAlert } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    // handleValidateText
    const handleValidateCaptcha = (event) => {
        const value = event.target.value;
        if (validateCaptcha(value) === true) {
            setDisabled(false)
        }
    }

    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                successAlert('Login successfully')
                form.reset();
                navigate(from)
            })
            .catch(error => errorAlert(error.message))

    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row max-w-screen-lg mx-auto border-4 shadow-2xl">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card  w-full max-w-lg py-8 px-8">
                    <h2 className='text-center text-4xl font-bold'>Login!!</h2>
                    <form onSubmit={handleLoginForm}>
                        <div className="card-body pt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="type your email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="type your password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label mb-3">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="type showing text above" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054]  hover:bg-[#D1A054] border-0 " disabled={disabled} type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                    <p className='text-xl text-[#bd8e49] text-center'>New here? <Link to='/registration' className='font-bold'>Create a New Account</Link> </p>
                    <p className='text-center my-5 text-xm font-medium'>Or Login with</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;