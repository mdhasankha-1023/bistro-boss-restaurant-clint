import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";


const PopularMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenus(popularItem)
            })
    }, [])
    return (
        <section className="max-w-screen-lg mx-auto">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'From our Menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    menus.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="border-b-4 py-4 px-5 mt-5 rounded-lg text-xl hover:text-[#D98641] border-[#1F2937] hover:border-[#D98641]">Reade more</button>
            </div>
        </section>
    );
};

export default PopularMenu;