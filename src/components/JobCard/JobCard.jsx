import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="p-4 rounded-md border shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold hover:text-green-500 cursor-pointer">
            React Developer
          </p>
          <p>
            <small className="text-green-800 hover:text-green-500">
              by Programming Hero
            </small>
          </p>
        </div>
        <div>
          <p className="font-semibold hover:text-green-500 hover:underline cursor-pointer">
            Remote
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div>
          <p>Full Time</p>
        </div>
        <div>
          <Link to="/job-details">
            <button className="px-5 py-2 bg-green-700 text-white rounded-full hover:bg-green-600 cursor-pointer">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
