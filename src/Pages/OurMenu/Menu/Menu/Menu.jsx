import Cover from '../../../../Component/Cover/Cover';
import coverImg from '../../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../Home/SectionTitle/SectionTitle";

const Menu = () => {
    return (
        <div>
           <Cover img={coverImg}
           title={'Our Menu'}
           ></Cover>
           <div className="my-24">
           <SectionTitle
           heading={"Today's Offer"}
           subHeading={"Don't miss"}
           ></SectionTitle>
           
           </div>
        </div>
    );
};

export default Menu;