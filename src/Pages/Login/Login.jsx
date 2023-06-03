import './login.css'
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null);
    
    
    useEffect(() => {
        loadCaptchaEnginge(4);
        
    }, [])

    // handleValidateText
    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value;
        if(validateCaptcha(value)===true){
            setDisabled(false)
        }
    }

    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captchaText = form.captchaText.value;
        const loginInfo = { email, password, captchaText }


    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row max-w-screen-lg mx-auto border-4 shadow-2xl">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card  w-full max-w-sm">
                    <form onSubmit={handleLoginForm}>
                        <div className="card-body">
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
                                <input type="text" name='captchaText' placeholder="type showing text above" className="input input-bordered" ref={captchaRef} />
                                <input onClick={handleValidateCaptcha} type="submit" className='btn btn-xs mt-2' value="validate" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054]  hover:bg-[#D1A054] border-0 " disabled={disabled} type="submit" value="Login" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;