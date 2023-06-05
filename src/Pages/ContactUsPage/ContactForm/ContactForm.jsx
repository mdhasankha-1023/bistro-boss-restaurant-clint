import { FaLocationArrow } from "react-icons/fa";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";


const ContactForm = () => {
    return (
        <div className="my-20 max-w-screen-lg mx-auto">
            <SectionTitle heading={'Contact Form'} subHeading={'Send Us a Message'}></SectionTitle>
            <div className="hero-content">
                <div className="card w-full bg-[#F3F3F3]">
                    <div className="card-body">
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="type your name" className="input input-bordered py-8" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="type your email address" className="input input-bordered py-8" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Phone</span>
                            </label>
                            <input type="number" placeholder="type your phone number" className="input input-bordered py-8" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Message</span>
                            </label>
                            <textarea name="massage" className="h-[200px]"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054] text-xl text-bold border-0">Send Message <FaLocationArrow className="ms-2"></FaLocationArrow></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;