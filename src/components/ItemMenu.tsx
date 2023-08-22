import React from "react";
import { useState } from "react";
import { ItemMenuType } from "../types/main.type";
import "../assets/scss/item.style.scss";
interface ItemMenuComponentType {
  items: ItemMenuType;
}
const ItemMenu: React.FC<ItemMenuComponentType> = ({ items }) => {
  const [selectedItem, itemAction] = useState("All");
  return (
    <>
      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button
                    onClick={() => itemAction("All")}
                    className={selectedItem == "All" ? "active" : ""}
                    data-filter="*"
                  >
                    All
                  </button>
                  {Object.keys(items).map((item) => (
                    <button
                      data-filter=".drink"
                      className={selectedItem == item ? "active" : ""}
                      key={item}
                      onClick={() => itemAction(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row special-list">
            {(selectedItem == "All"
              ? Object.values(items).reduce((acc, curr) => {
                  return [...acc, ...curr];
                }, [])
              : items[selectedItem]
            )?.map((item) => (
              <div className="col-lg-4 col-md-6 special-grid drinks">
                <div className="gallery-single fix">
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="why-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <h5>
                      {" "}
                      {item.currencyType == "INR" ? "RS " : "$ "}
                      {item.price}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemMenu;
