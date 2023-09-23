import React, { useState, useEffect } from "react";
import Request from "../services/Request";
export interface QuoteType {
  quoteContent: { content: string; writer: string };
}
const Quote = () => {
  const [myQuote, setMyQuote] = useState<QuoteType>();
  const service = new Request();
  // React.useEffect(() => {
  //   service
  //     .getSiteInfo<QuoteType>()
  //     .then((res) => {
  //       setMyQuote(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <>
      <div className="qt-box qt-background">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-left">
              <p className="lead ">{myQuote?.quoteContent.content}</p>
              <span className="lead">{myQuote?.quoteContent.writer}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
