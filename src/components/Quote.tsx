import React from "react";
interface QuoteType {
  quote: { content: string; writer: string };
}
const Quote: React.FC<QuoteType> = ({ quote }) => {
  return (
    <>
      <div className="qt-box qt-background">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-left">
              <p className="lead ">{quote.content}</p>
              <span className="lead">{quote.writer}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
