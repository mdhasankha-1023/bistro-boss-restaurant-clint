

const MenuItem = ({ menu }) => {
    const { name, recipe, image, price } = menu;
    return (
        <div className="flex gap-6 items-center p-2">
            <img className="w-[118px] h-[100px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div>
                <h3 className="text-xl text-[#151515]">{name} -----------------</h3>
                <p className="text-base text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl">{price}</p>
        </div>
    );
};

export default MenuItem;