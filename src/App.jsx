import Bestprice from "./components/Bestprice";
import BottomCircle from "./components/BottomCircle";
import Bottomcontent from "./components/Bottomcontent";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Swipebtn from "./components/Swipebtn";
import Welcometo from "./components/Welcometo";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg">
        {/* <h1> image </h1> */}
        {/* <img src="src/images/Ubg.png" alt="upper design" /> */}
        <svg
          width="1440"
          height="604"
          viewBox="0 0 1440 604"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z"
            fill="white"
          />
        </svg>
      </div>
      <Welcometo />
      <Card />
      <Swipebtn />
      <Hero />
      <div className="viewall">
        <div className="Viewall">
          <button> View All </button>
        </div>
      </div>
      <Bottomcontent />
      <Footer />
      <Bestprice />
      <BottomCircle />
    </>
  );
}

export default App;
