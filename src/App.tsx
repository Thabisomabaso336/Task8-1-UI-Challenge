import React from "react";
import "./App.css";
import NavBar from "./componen/NavBar";
import Paragraph from "./componen/Paragraph";

import MinImage from "./componen/MinImage";
import ThumbImage from "./componen/ThumbImage";

import DiscountBadge from "./componen/DiscountBadge";
import AddtocartButton from "./componen/AddtocartButton";
import NormalPrice from "./componen/NormalPrice";
import SalePrice from "./componen/SalePrice";

import QuantityButton from "./componen/QuantityButton";
import CompanyHeading from "./componen/CompanyHeading";

function App() {
  return (
    <>
      <NavBar />
      <hr/>
      <div className="row">
        <div className="col1">
          <div className="minImage">
            <MinImage />
          </div>
          <div className="thumbImage">
            <ThumbImage />
          </div>
        </div>

        <div className="col">
          <div className="companyHeading">
            <CompanyHeading />
          </div>
          <div className="paragraph">
            <Paragraph />
          </div>
          <div className="price">
            <div className="salePrice">
              <SalePrice />
            </div>
            <div className="discountBadge">
              <DiscountBadge />
            </div>
          </div>
          <div className="normalPrice">
            <NormalPrice/>
          </div>
          <div className="ButtonsContainer">
            <QuantityButton />
            <AddtocartButton />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
