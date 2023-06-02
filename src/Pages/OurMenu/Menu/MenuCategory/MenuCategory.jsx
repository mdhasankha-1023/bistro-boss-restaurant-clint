import { Link } from "react-router-dom";
import Cover from "../../../../Component/Cover/Cover";
import MenuItem from "../../../Home/MenuItem/MenuItem";
import SectionTitle from "../../../Home/SectionTitle/SectionTitle";



const MenuCategory = ({ items, img, title, subHeading, heading }) => {

    return (
        <div>
            {
                title &&
                <Cover img={img} title={title}></Cover>
            }
            <div className="my-24 max-w-screen-lg mx-auto">
                {heading &&
                    <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>}
                <div className="grid md:grid-cols-2 gap-6">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            menu={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="text-center">
                    <Link to={`/order/${title}`}>
                        <button className="border-b-4 py-3 px-5 mt-5 rounded-lg text-xl hover:text-[#D98641] border-[#1F2937] hover:border-[#D98641] uppercase">Order Your Favorite Food</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default MenuCategory;