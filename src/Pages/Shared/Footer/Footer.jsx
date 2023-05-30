import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (

        <>
            <footer className="flex text-white">
                <div className="justify-items-center bg-[#1F2937] w-2/4 text-center py-16">
                    <h2 className="text-2xl text-[#888C93] font-bold uppercase mb-4">Contact Us</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] w-2/4 text-center py-16">
                    <span className="footer-title text-2xl uppercase mb-4">Follow Us</span>
                    <p className="my-4">Join us on social media</p>
                    <div className="flex justify-center text-3xl">
                        <FaFacebook className="me-4"></FaFacebook>
                        <FaInstagram className="me-4"></FaInstagram>
                        <FaTwitter className="me-4"></FaTwitter>
                    </div>
                </div>
            </footer>
            <div className="footer-center p-4 bg-[#151515] text-white">
                <div>
                    <p>Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
            </div>
        </>


    );
};

export default Footer;