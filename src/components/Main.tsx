import RestaurantSlider from "./RestaurantSlider";
import Quote from "./Quote";
import About from "./About";
import ItemMenu from "./ItemMenu";
import Gallery from "./Gallery";
import { CustomerReview } from "./CustomerReview";
import { ContactInfo } from "./ContactInfo";
import {
  aboutContent,
  customerReviewContent,
  galleryContent,
  items,
  quoteContent,
  sliderContent,
} from "../constant/hotel-feature-data.const";
const Main = () => {
  return (
    <>
      <RestaurantSlider slides={sliderContent} />
      <About info={aboutContent} />
      <Quote quote={quoteContent} />
      <ItemMenu items={items} />
      <Gallery items={galleryContent} />
      <CustomerReview items={customerReviewContent} />
      <ContactInfo />
    </>
  );
};

export default Main;
