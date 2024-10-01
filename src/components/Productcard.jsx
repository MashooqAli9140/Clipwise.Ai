import React from "react";
import crystal from "/src/images/crys.png";
const Productcard = () => {
  return (
    <div>
      <div className="productcard">
        <div className="CARDIMAGEdiv">
          <img
            src={crystal}
            alt="Product crystol"
            className="CARDIMAGE"
          />
        </div>
        <div className="card-text">
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "400",
              width: "100%",
              lineHeight: "30px",
            }}
          >
            Crystal Agate Phone Grip
          </h3>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "rgb(49,84,109)",
              lineHeight: "24px",
            }}
          >
            18.99${" "}
          </h3>
        </div>
        <div className="buynowbtn">
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
