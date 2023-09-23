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
import AlertMessage from "../shared/presentational/AlertMessage";
import { AlertType } from "../types/common.type";
const Main = () => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo>();
  const [messageShow, setMessage] = useState<{
    isShow: Boolean;
    type: AlertType;
    message: String;
  }>();
  const service = new Request();
  React.useEffect(() => {
    service
      .getSiteInfo<SiteInfo>()
      .then((res) => {
        setSiteInfo(res);
        setMessage({
          isShow: true,
          type: "success",
          message: "Site information loaded !",
        });
      })
      .catch((error) => {
        setMessage({
          isShow: true,
          type: "error",
          message: "Site information loaded !",
        });
      });
  }, []);
  return (
    <>
      {messageShow?.isShow && (
        <AlertMessage
          errorType={messageShow.type}
          message={messageShow.message}
        ></AlertMessage>
      )}
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
