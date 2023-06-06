import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {google, successAlert} = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    // sign-in and sign-up with google
    const handleGoogleBtn = () => {
        google()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            const user = {name: loggedUser.displayName, email: loggedUser.email }
                        fetch('http://localhost:5000/user',{
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                        .then(res => res.json())
                        .then(() => {
                                navigate(from, {replace: true})
                            
                        })

        })
        .catch(error => console.log(error))
    }

    return (
        <div className='flex text-4xl justify-between w-3/6 mx-auto'>
                        <FaFacebook className='me-3 cursor-pointer'></FaFacebook>
                        <FaGoogle onClick={handleGoogleBtn} className='me-3 cursor-pointer'></FaGoogle>
                        <FaGithub className='me-3 cursor-pointer'></FaGithub>
                    </div>
    );
};

export default SocialLogin;