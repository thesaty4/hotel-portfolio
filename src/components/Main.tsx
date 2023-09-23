import RestaurantSlider from "./RestaurantSlider";
import Quote, { QuoteType } from "./Quote";
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
import React, { useState } from "react";
import Request from "../services/Request";
const Main = () => {
  const [myQuote, setMyQuote] = useState<QuoteType>();
  const service = new Request();
  React.useEffect(() => {
    service
      .getSiteInfo<QuoteType>()
      .then((res) => {
        debugger;
        // setMyQuote(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(myQuote);
  return (
    <>
      <RestaurantSlider slides={sliderContent} />
      <About info={aboutContent} />
      <Quote />
      <ItemMenu items={items} />
      <Gallery items={galleryContent} />
      <CustomerReview items={customerReviewContent} />
      <ContactInfo />
    </>
  );
};

export default Main;
