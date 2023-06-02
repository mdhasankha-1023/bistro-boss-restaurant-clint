

const OrderCard = ({ orderInfo }) => {
    const { name, recipe, image, price } = orderInfo;
    
    return (
        <div className="card w-full relative">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body text-center bg-[#F3F3F3]">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <p className="absolute top-0 right-0 bg-[#111827] mt-4 me-4 rounded-lg text-white py-1 px-4">${price}</p>
                <div className="card-actions justify-center">
                    <button className="border-b-4 py-4 px-5 mt-5 rounded-lg text-xl text-[#D98641] border-[#D98641] hover:bg-[#1F2937] uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;