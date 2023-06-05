import Cover from "../../../Component/Cover/Cover";
import contactImg from '../../../assets/contact/banner.jpg'
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location";


const ContactUs = () => {
    return (
        <div>
          <Cover title={'Contact Us'} img={contactImg} subTitle={'Would you like to try a dish?'}></Cover>  
          <Location></Location>
          <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;