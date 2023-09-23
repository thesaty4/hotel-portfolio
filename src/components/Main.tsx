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
import { SiteInfo } from "../types/site-info.types";
import useSnackbar from "../custom-hooks/Snackbar";
const Main = () => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo>();
  const service = new Request();
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  React.useEffect(() => {
    service
      .getSiteInfo<SiteInfo>()
      .then((res) => {
        setSiteInfo(res);
        showSnackbar("Site information loaded !", "success");
      })
      .catch((error) => {
        showSnackbar("Site load error !", "error");
      });
  }, []);
  return (
    <>
      {siteInfo?.items && (
        <>
          <SnackbarComponent />
          <RestaurantSlider slides={sliderContent} />
          <About info={aboutContent} />
          <Quote />
          <ItemMenu items={items} />
          <Gallery items={galleryContent} />
          <CustomerReview items={customerReviewContent} />
          <ContactInfo />
        </>
      )}
    </>
  );
};

export default Main;
