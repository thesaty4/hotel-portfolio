import React, { useState, useEffect } from "react";
import Request from "../services/Request";
export interface QuoteType {
  quoteContent: { content: string; writer: string };
}
const Quote: React.FC<QuoteType> = ({ quoteContent }) => {
  const [myQuote, setMyQuote] = useState<QuoteType>();
  return (
    <>
      <div className="qt-box qt-background">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-left">
              <p className="lead ">{quoteContent.content}</p>
              <span className="lead">{quoteContent.writer}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
