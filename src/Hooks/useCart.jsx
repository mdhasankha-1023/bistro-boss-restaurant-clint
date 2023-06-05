import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useCart = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn:  async () => {
            const data = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return data.json()
          }         
    })
    return [cart, refetch]
}

export default useCart;