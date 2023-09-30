export const ContactInfo = () => {
  return (
    <>
      <div id="contact" className="contact-imfo-box">
        <div className="container">
          <div
            className="row"
            style={{
              rowGap: "23px",
            }}
          >
            <div className="col-md-4">
              <i className="fa fa-volume-control-phone"></i>
              <div className="overflow-hidden">
                <h4>Phone</h4>
                <p className="lead">+91 9792183411</p>
              </div>
            </div>
            <div className="col-md-4">
              <i className="fa fa-envelope"></i>
              <div className="overflow-hidden">
                <h4>Email</h4>
                <p className="lead">chhappanbhog@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <i className="fa fa-map-marker"></i>
              <div className="overflow-hidden">
                <h4>Location</h4>
                <p className="lead">Maniyara Dhaba - 272175</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
