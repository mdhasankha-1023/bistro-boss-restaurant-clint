import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();

    const NavOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
        <li><Link to='/dashBoard'>DashBoard</Link></li>
        <li tabIndex={0}><Link to='/our-menu'>Our Menu</Link></li>
        <li><Link to='/order/Salad'>Order</Link></li>
        <li><Link to='/dashBoard/my-cart'>
            <button className="btn btn-xs bg-black bg-opacity-50">
                <FaShoppingCart size='2em'></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>
        
    </>

    // handleSignOutBtn
    const handleSignOutBtn = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-black bg-opacity-40 text-white py-5 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavOptions}
                    </ul>
                </div>
                <div className="btn btn-ghost normal-case text-xl flex-nowrap">
                    <span>BISTRO BOSS</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase">
                    {NavOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p onClick={handleSignOutBtn} className="me-4 cursor-pointer text-lg hover:text-[#EEFF25]">Sign-out</p>
                        <div className="border p-2 rounded-full text-2xl cursor-pointer">
                            <FaUserAlt></FaUserAlt>
                        </div>
                    </>
                        :
                        <>
                            <Link className="text-xl me-5" to='/login'>Login</Link>
                            <Link  className="text-xl me-5" to='/registration'>Registration</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;