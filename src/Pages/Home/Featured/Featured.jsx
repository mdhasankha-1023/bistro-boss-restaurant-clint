import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-section py-32 text-white my-32">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'From out menu'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center mx-auto text-white gap-12 max-w-screen-lg">
                <img className="w-[400px] h-[250px]" src={img} alt="" />
                <div>
                    <h3>March 20, 2023 <br /> WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis provident quos cumque libero repudiandae eius eveniet nostrum quam dolor totam ratione, quia tenetur ducimus reiciendis nihil corporis, asperiores, tempore delectus.</p>
                    <button className="border-b-4 py-4 px-5 mt-5 rounded-lg text-xl hover:text-[#D98641] hover:border-[#D98641]">Reade more</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;