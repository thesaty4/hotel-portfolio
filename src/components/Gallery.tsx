import React from "react";
interface GalleryType {
  items: { image: string }[];
}
const Gallery: React.FC<GalleryType> = ({ items }) => {
  return (
    <>
      <div className="gallery-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Gallery</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="tz-gallery">
            <div className="row">
              {items.map((item, index) => (
                <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                  <a className="lightbox" href={item.image}>
                    <img
                      className="img-fluid"
                      src={item.image}
                      alt="Gallery Images"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
