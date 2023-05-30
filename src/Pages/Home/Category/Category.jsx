import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../SectionTitle/SectionTitle";


const Category = () => {
    return (
        <section className="my-24 max-w-screen-lg mx-auto">
            <SectionTitle
            subHeading={'From 11.00am to 11.00pm'}
            heading={'order online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img src={slider1} alt="" />
                    <p className="text-center text-white text-3xl  uppercase absolute bottom-0 w-11/12 mb-8">Salads</p>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider2} alt="" />
                    <p className="text-center text-white text-3xl  uppercase absolute bottom-0 w-11/12 mb-8">Pizzas</p>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider3} alt="" />
                    <p className="text-center text-white text-3xl  uppercase absolute bottom-0 w-11/12 mb-8">Soups</p>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider4} alt="" />
                    <p className="text-center text-white text-3xl  uppercase absolute bottom-0 w-11/12 mb-8">Desserts</p>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider5} alt="" />
                    <p className="text-center text-white text-3xl  uppercase absolute bottom-0 w-11/12 mb-8">Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;