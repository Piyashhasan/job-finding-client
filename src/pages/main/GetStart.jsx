import { Link } from "react-router-dom";
import candidate from "../../assets/img/candidates.svg";
import employer from "../../assets/img/employer.svg";

const GetStart = () => {
  // console.log('get start')
  return (
    <div className="container my-10">
      <div>
        <h1 className="text-3xl text-green-500 text-center font-semibold font-['Agbalumo']">
          Continue as ...
        </h1>
        <div className="grid grid-cols-1 mt-10 lg:grid lg:grid-cols-2">
          {/* --- candidate start --- */}
          <Link to="/candidate">
            <div className="border rounded-3xl py-5 relative mx-16 cursor-pointer hover:bg-green-300 hover:text-white hover:transition hover:ease-in-out hover:delay-100">
              <div className="flex items-center justify-center mb-16">
                <img className="h-[200px]" src={candidate} alt="candidate" />
              </div>
              <div className="absolute bottom-0 right-0 left-0">
                <p className="text-center mb-3 text-xl font-semibold bottom-0">
                  Candidate
                </p>
              </div>
            </div>
          </Link>
          {/* --- candidate end --- */}

          {/* --- employer start --- */}
          <Link to="/employer">
            <div className="border rounded-3xl py-5 relative mx-16 cursor-pointer hover:bg-green-300 hover:text-white hover:transition hover:ease-in-out hover:delay-100">
              <div className="flex items-center justify-center mb-16 ">
                <img className="h-[200px]" src={employer} alt="employer" />
              </div>
              <div className="absolute bottom-0 right-0 left-0">
                <p className="text-center mb-3 text-xl font-semibold bottom-0">
                  Employer
                </p>
              </div>
            </div>
          </Link>
          {/* --- employer end --- */}
        </div>
      </div>
    </div>
  );
};

export default GetStart;
