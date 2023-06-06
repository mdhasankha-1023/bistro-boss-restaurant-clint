import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {
        axios.interceptors.request.use((config) => {
            const token = localStorage.getItem('jwt_token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axios.interceptors.response.use(
            (response) => response,  //return response if you want(return response)

        async(error) => {
            if(error.response && error.response.status === 401 || error.response.status === 403){
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        });
    }, [logOut, navigate, axiosSecure])



    return [axiosSecure]
};

export default useAxiosSecure;