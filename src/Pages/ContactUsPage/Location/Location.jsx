import { FaLocationArrow, FaPhone, FaStopwatch } from "react-icons/fa";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";


const Location = () => {
    return (
        <div className="my-24 max-w-screen-lg mx-auto">
            <SectionTitle heading={'Our Location'} subHeading={'Visit Us'}></SectionTitle>
            <div className="md:flex gap-5 justify-center items-center">
                <div className="phone text-center w-1/3">
                    <div className="py-4 bg-[#D1A054] text-white flex justify-center">
                        <FaPhone size='2em'></FaPhone>
                    </div>
                    <div className="pt-10 pb-16 px-8 bg-[#F3F3F3]">
                        <h3 className="text-2xl font-bold">Phons</h3>
                        <p>+88 016448338</p>
                    </div>
                </div>
                <div className="address text-center w-1/3">
                    <div className="py-4 bg-[#D1A054] text-white flex justify-center">
                        <FaLocationArrow size='2em'></FaLocationArrow>
                    </div>
                    <div className="pt-10 pb-16 bg-[#F3F3F3]">
                        <h3 className="text-2xl font-bold">Address</h3>
                        <p>East Rajarbag Kalibari, Dhaka-1214</p>
                    </div>
                </div>
                <div className="work-hours text-center w-1/3">
                    <div className="py-4 bg-[#D1A054] text-white flex justify-center">
                        <FaStopwatch size='2em'></FaStopwatch>
                    </div>
                    <div className="pt-10 pb-10 bg-[#F3F3F3]">
                        <h3 className="text-2xl font-bold">Workings Hours</h3>
                        <p>Mon - Fri 8:00AM - 9:00PM</p>
                        <p>Mon - Fri 8:00AM - 9:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;