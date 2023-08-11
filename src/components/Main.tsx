import menuItems from '../constant/hotel-items';   
import RestaurantSlider from './RestaurantSlider'; 
import Quote from './Quote';
import About from './About'
import { about } from '../constant/hotel-details'
import ItemMenu from './ItemMenu';
import Gallery from './Gallery';
import { CustomerReview } from './CustomerReview';
import { ContactInfo } from './ContactInfo';
const Main = () =>{  
    return (
        <> 
            <RestaurantSlider slides={menuItems} />
            <About
                imageSrc={about.imageSrc}
                restaurantName={about.restaurantName}
                description={about.description}
            />
            <Quote/>
            <ItemMenu/>
            <Gallery/>
            <CustomerReview/>
            <ContactInfo/>
        </>
    );
}

export default Main;