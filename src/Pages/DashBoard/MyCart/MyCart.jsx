import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    console.log(cart.length)
    // handleDeleteBtn
    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Successfully deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="w-full relative">
            <SectionTitle heading={'Wanna Add More'} subHeading={'My Cart'}></SectionTitle>
            <div className="overflow-x-auto">
                <div className="flex justify-between w-4/5 mx-auto my-4 text-2xl font-bold items-center">
                    <h3>Total Orders: {cart ? cart.length : 0}</h3>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button className="btn bg-[#D1A054] border-0">Pay</button>
                </div>
                <table className="table w-4/5 mx-auto">
                    {/* head */}
                    <thead>
                        <tr className="my-cart">
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(row => <tr
                                key={row._id}
                            >
                                <th>{cart.indexOf(row) + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{row.name}</td>
                                <td>${row.price}</td>
                                <th >
                                    <div onClick={() => handleDeleteBtn(row._id)} className="bg-red-600 rounded-lg cursor-pointer text-white inline-block p-3">
                                        <FaTrashAlt></FaTrashAlt>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                cart.length === 0 && <p className="text-2xl font-bold text-center absolute left-[40%] top-[60%] my-52 opacity-50">No Items Available...</p>
            }
        </div>
    );
};

export default MyCart;