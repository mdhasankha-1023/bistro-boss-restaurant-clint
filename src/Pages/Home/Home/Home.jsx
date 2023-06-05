import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContactSection from "../ContactSection/ContactSection";
import Featured from "../Featured/Featured";
import PopularFoods from "../PopularFoods/PopularFoods";
import PopularMenu from "../PopularMenu/PopularMenu";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <ContactSection></ContactSection>
            <PopularFoods></PopularFoods>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;