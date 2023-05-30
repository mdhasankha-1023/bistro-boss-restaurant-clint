import SectionTitle from "../SectionTitle/SectionTitle";
import dish1 from '../../../assets/home/slide1.jpg'
import dish2 from '../../../assets/home/slide2.jpg'
import dish3 from '../../../assets/home/slide3.jpg'


const PopularFoods = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'Chef Recommends'}
            ></SectionTitle>
            <div className="md:flex gap-5 max-w-screen-lg mx-auto">
                <div className="card w-96">
                    <figure className="h-[300px]"><img className="w-full" src={dish1} alt="Shoes" /></figure>
                    <div className="card-body text-center bg-[#F3F3F3]">
                        <h2 className="text-2xl font-bold">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                        <button className="border-b-4 py-4 px-5 mt-5 rounded-lg text-xl text-[#D98641] border-[#D98641] hover:bg-[#1F2937] uppercase">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96">
                    <figure className="h-[300px]"><img className="w-full" src={dish2} alt="Shoes" /></figure>
                    <div className="card-body text-center bg-[#F3F3F3]">
                        <h2 className="text-2xl font-bold">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                        <button className="border-b-4 py-4 px-5 mt-5 rounded-lg text-xl text-[#D98641] border-[#D98641] hover:bg-[#1F2937] uppercase">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96">
                    <figure className="h-[300px]"><img className="w-full" src={dish3} alt="Shoes" /></figure>
                    <div className="card-body text-center bg-[#F3F3F3]">
                        <h2 className="text-2xl font-bold">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                        <button className="border-b-4 py-4 px-5 mt-5 rounded-lg text-xl text-[#D98641] border-[#D98641] hover:bg-[#1F2937] uppercase">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFoods;