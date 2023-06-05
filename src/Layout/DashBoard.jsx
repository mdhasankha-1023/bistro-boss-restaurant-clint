import { FaBars, FaBook, FaCalendar, FaCalendarCheck, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart, FaSms, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-between my-8 ">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"></label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-full h-full uppercase">
                    {/* Sidebar content here */}
                    <li className="text-center text-2xl font-bold my-11">
                        Bistro Boss
                    </li>
                    {   isAdmin === true ?
                        <> 
                        {/* Admin menu */}
                            < li >
                                <Link to='/dashBoard/admin' ><FaHome size='2em'></FaHome> Admin Home</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/add-items'><FaUtensils size='1.5em'></FaUtensils> Add Items</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/items'><FaBars size='1.5em'></FaBars> Manage Items</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/my-cart'><FaBook size='1.5em'></FaBook> Manage Bookings</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/users'><FaUsers size='1.5em'></FaUsers> All Users</Link>
                            </li>
                        </>
                        :
                        <>
                        {/* user menu */}
                            <li>
                                <Link to='/dashBoard/home' ><FaHome size='1.5em'></FaHome> User Home</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/reservation'><FaCalendar size='1.5em'></FaCalendar> Reservation</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/history'><FaWallet size='1.5em'></FaWallet> Payment History</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/my-cart'><FaShoppingCart size='1.5em'></FaShoppingCart> My cart <FaShoppingCart></FaShoppingCart><div className="badge badge-primary badge-sm">+{cart.length}</div></Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/review'><FaSms size='1.5em'></FaSms> Add Review</Link>
                            </li>
                            <li>
                                <Link to='/dashBoard/my-booking'><FaCalendarCheck size='1.5em'></FaCalendarCheck> My Booking</Link>
                            </li>
                        </>
                    }

                    {/* Divider */}
                    <div className="border-2 border-white my-5"></div>
                    {/* Normal menu */}
                    <li>
                        <Link to='/' ><FaHome size='1.5em'></FaHome>Home</Link>
                    </li>
                    <li>
                        <Link to='/our-menu'><FaBars size='1.5em'></FaBars>Menu</Link>
                    </li>
                    <li>
                        <Link to='/order/Salad'><FaShoppingBag size='1.5em'></FaShoppingBag> Shop</Link>
                    </li>
                    <li>
                        <Link to='/contact-us'><FaMailBulk size='1.5em'></FaMailBulk> Contact</Link>
                    </li>

                </ul>

            </div>
        </div >
    );
};

export default DashBoard;