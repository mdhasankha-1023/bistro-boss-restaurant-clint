import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from 'react-icons/fa';



const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/public/Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews)
    return (
        <div className="mb-32">
            <SectionTitle
                subHeading={'What our clients says'}
                heading={'Testimonials'}
            ></SectionTitle>
            <div className="max-w-screen-lg mx-auto text-center">
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                                className="px-16"
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                        className="mb-11"
                                    />
                                    <FaQuoteLeft size='4em' className="mb-10"></FaQuoteLeft>
                                    <p className="text-xl text-[#444444]">{review.details}</p>
                                    <h3 className="text-3xl text-[#CD9003] mt-2">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Reviews;