import React from "react";

const BottomCircle = () => {
  return (
    <div className="bottomcircle">
      <svg
        width="707"
        height="542"
        viewBox="0 0 707 542"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M744 170C744 226.291 731.225 281.847 706.638 332.484C682.051 383.122 646.293 427.519 602.058 462.331C557.823 497.143 506.264 521.462 451.266 533.457C396.268 545.451 339.265 544.808 284.552 531.576C229.839 518.343 178.842 492.866 135.404 457.065C91.9652 421.263 57.2181 376.07 33.7801 324.891C10.3421 273.712 -1.17558 217.881 0.0947366 161.605C1.36505 105.329 15.3903 50.0745 41.1137 0.00506592L372 170H744Z"
          fill="white"
        />
      </svg>

      <div className="circle">
        <div className="circle1">
          <div className="bottomcrysdiv">
            <img
              src="src/images/crys.png"
              alt="bottom image"
              className="bottomcrys"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCircle;