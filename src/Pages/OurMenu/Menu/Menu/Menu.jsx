import useMenu from '../../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import coverImg1 from '../../../../assets/menu/banner3.jpg'
import coverImg2 from '../../../../assets/menu/dessert-bg.jpeg'
import coverImg3 from '../../../../assets/menu/pizza-bg.jpg'
import coverImg4 from '../../../../assets/menu/salad-bg.jpg'
import coverImg5 from '../../../../assets/menu/soup-bg.jpg'
import Cover from '../../../../Component/Cover/Cover';



const Menu = () => {
    const [menu] = useMenu();
    const todaysOffers = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <Cover img={coverImg1} title={"Our Menu"}></Cover>
            
            
            {/* Today's offers*/}
            <MenuCategory items={todaysOffers} heading={"Today's Offer"} subHeading={"Don't miss"}></MenuCategory>

            {/* Dessert */}
            <MenuCategory items={dessert} img={coverImg2} title={'Desserts'}></MenuCategory>

            {/* Pizzas */}
            <MenuCategory items={pizzas} img={coverImg3} title={'Pizza'}></MenuCategory>

            {/* salad */}
            <MenuCategory items={salad} img={coverImg4} title={'Salads'}></MenuCategory>

            {/* soup */}
            <MenuCategory items={soup} img={coverImg5} title={'Soups'}></MenuCategory>
        </div>
    );
};

export default Menu;