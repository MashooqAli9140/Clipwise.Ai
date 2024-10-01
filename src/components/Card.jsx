import React from "react";
import crystal from "/src/images/crys.png";

const Card = () => {
  return (
    <div className="card">
      <div className="newlot">
        {" "}
        <h4> New lot</h4>{" "}
      </div>
      <div className="cardimage">
        {" "}
        <img src= {crystal} alt="" />
      </div>
      <div className="cardtitle">
        <h3>
          {" "}
          CRYSTAL AGATE PHONE GRIP -{" "}
          <span style={{ color: "rgb(80,113,137)" }}>
            {" "}
            <b> $18.99 </b>{" "}
          </span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Card;
