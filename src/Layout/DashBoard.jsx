import { FaCalendar, FaCalendarCheck, FaHome, FaShoppingCart, FaSms, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {
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
                <ul className="menu p-4 w-1/4 h-full uppercase">
                    {/* Sidebar content here */}
                    <li className="text-center text-2xl font-bold">
                        Bistro Boss
                    </li>
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
                        <Link to='/dashBoard/my-cart'><FaShoppingCart size='1.5em'></FaShoppingCart> My cart</Link>
                    </li>
                    <li>
                        <Link to='/dashBoard/review'><FaSms size='1.5em'></FaSms> Add Review</Link>
                    </li>
                    <li>
                        <Link to='/dashBoard/my-booking'><FaCalendarCheck size='1.5em'></FaCalendarCheck> My Booking</Link>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;