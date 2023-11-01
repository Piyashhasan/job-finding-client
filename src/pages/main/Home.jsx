import Lottie from "lottie-react";
import picture from "../../assets/img-json/home-page-animation.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 ">
        {/* --- left side start --- */}
        <div className="py-14 px-5 my-auto">
          <p className="text-[20px] text-[#5EA07E]">
            #1 Online Job Finding Platform
          </p>
          <h1 className="text-[80px] font-bold leading-[85px] text-[#005025] my-5">
            Find the talents <br /> for any job.
          </h1>
          <p className="text-[22px] text-[#4C4C4C]">
            Unlock your potential with quality job & earn from world leading
            brands & co.
          </p>
          <Link to="/jobs">
            <button className="bg-[#00bf58] mt-5 py-3 px-10 rounded-full text-white hover:bg-[#244034] cursor-pointer">
              Find Jobs
            </button>
          </Link>
        </div>
        {/* --- left side end --- */}

        {/* --- right side start --- */}
        <div className="px-5 z-[-9999]">
          <div>
            <Lottie animationData={picture} loop={true} />
          </div>
        </div>
        {/* --- right side end --- */}
      </div>
    </div>
  );
};

export default Home;
