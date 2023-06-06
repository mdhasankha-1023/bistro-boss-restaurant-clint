import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user } = useContext(AuthContext)
    // const token = localStorage.getItem('jwt_token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn:  async () => {
            const data = await axiosSecure(`/carts?email=${user.email}`)
            return data.json()
          }         
    })

    return [cart, refetch]
}

export default useCart;