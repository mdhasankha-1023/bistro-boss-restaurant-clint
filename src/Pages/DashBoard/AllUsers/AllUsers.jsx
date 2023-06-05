import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const AllUsers = () => {
    const { successAlert } = useContext(AuthContext)

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/users')
            return data.json()
        }
    })

    // handleRoleBtn
    const handleRoleBtn = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.modifiedCount > 0) {
                    successAlert('Successfully added admin')
                }
            })
    }

    // handleDeleteBtn
    const handleDeleteBtn = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.deletedCount) {
                    successAlert('Successfully deleted admin')
                }
            })
    }


    return (
        <div className="w-full relative">
            <SectionTitle heading={'Manage All Users'} subHeading={'How Many??'}></SectionTitle>
            <div className="w-4/5 mx-auto my-5">
                <h1 className="text-3xl font-bold">Total Users: {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-4/5 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            <p className="text-red-600 font-bold">Admin</p>
                                            :
                                            <div onClick={() => handleRoleBtn(user._id)} className="inline-block p-2 rounded bg-[#D1A054] text-white">
                                                <FaUserShield size='1.5em'></FaUserShield>
                                            </div>
                                    }
                                </td>
                                <td>
                                    <div onClick={() => handleDeleteBtn(user._id)} className="p-2 bg-red-500 rounded text-white inline-block">
                                        <FaTrashAlt size='1.5em'></FaTrashAlt>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                users.length === 0 && <p className="text-2xl font-bold text-center absolute left-[40%] top-[60%] my-52 opacity-50">No users Available...</p>
            }
        </div>
    )
};

export default AllUsers;