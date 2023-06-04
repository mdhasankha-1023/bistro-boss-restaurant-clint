import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useCart from "../../Hooks/useCart";


const OrderCard = ({ orderInfo }) => {
    const { name, recipe, image, price, _id } = orderInfo;
    const { user, successAlert } = useContext(AuthContext);
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        const cart = { orderMenuId: _id, name, image, price, email: user.email }
        if (user.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cart)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        successAlert('Add Cart Successfully')
                    }
                })
                .catch(error => console.log(error))
        }

    }

    return (
        <div className="card w-full relative">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body text-center bg-[#F3F3F3]">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <p className="absolute top-0 right-0 bg-[#111827] mt-4 me-4 rounded-lg text-white py-1 px-4">$ {price}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="border-b-4 py-4 px-5 mt-5 rounded-lg text-xl text-[#D98641] border-[#D98641] hover:bg-[#1F2937] uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;