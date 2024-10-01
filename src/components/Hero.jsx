import React from "react";
import Productcard from "./Productcard";

const Hero = () => {
  return (
    <div className="herosection">
      {/* All product head title */}
      <div className="herohead">
        <h1> All Product </h1>
      </div>
      {/* filter text here */}
      <div className="filter">
        <h3 className="filtertext">
          {" "}
          Filter: <span className="Allprotext"> All Products </span>{" "}
          <div className="filterdownbtn" style={{ marginLeft: "177px" }}>
            {" "}
          </div>
        </h3>
        <h3 className="filtertext">
          {" "}
          Sort: <span className="Allprotext"> Best Selling </span>{" "}
          <div className="filterdownbtn"> </div>
        </h3>
      </div>

      {/* All product Content */}
      <div className="allprocontainer">
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
      <div className="allprocontainer">
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
    </div>
  );
};

export default Hero;
