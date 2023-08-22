import React from "react";
import { useState } from "react";
import { CustomerReviewType } from "../types/main.type";
interface CustomerType {
  items: CustomerReviewType[];
}
export const CustomerReview: React.FC<CustomerType> = ({ items }) => {
  const [itemIndex, itemSetter] = useState(0);
  return (
    <>
      <div className="customer-reviews-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Customer Reviews</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div id="reviews" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner mt-4">
                {
                  <div className="carousel-item text-center active">
                    <div className="img-box p-1 border rounded-circle m-auto">
                      <img
                        className="d-block w-100 rounded-circle"
                        src={items[itemIndex].image}
                        alt={items[itemIndex].name}
                      />
                    </div>
                    <h5 className="mt-4 mb-0">
                      <strong className="text-warning text-uppercase">
                        {items[itemIndex].name}
                      </strong>
                    </h5>
                    <h6 className="text-dark m-0">
                      {items[itemIndex].designation}
                    </h6>
                    <p className="m-0 pt-3">{items[itemIndex].notes}</p>
                  </div>
                }
              </div>
              <a
                className="carousel-control-prev"
                role="button"
                data-slide="prev"
                onClick={() =>
                  itemSetter(itemIndex !== 0 ? itemIndex - 1 : items.length - 1)
                }
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                role="button"
                data-slide="next"
                onClick={() =>
                  itemSetter(itemIndex !== items.length - 1 ? itemIndex + 1 : 0)
                }
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
