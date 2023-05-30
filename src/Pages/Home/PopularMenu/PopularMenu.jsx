import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Home/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect( () => {
        fetch('/public/menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenus(popularItem)
        })
    } , [])
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
        </section>
    );
};

export default PopularMenu;