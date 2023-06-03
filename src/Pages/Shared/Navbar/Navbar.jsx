import { Link } from "react-router-dom";

const Navbar = () => {
    const NavOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}><Link to='/our-menu'>Our Menu</Link></li>
        <li><Link to='/order/Salad'>Order</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-black bg-opacity-40 text-white">
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
                <ul className="menu menu-horizontal px-1">
                    {NavOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;