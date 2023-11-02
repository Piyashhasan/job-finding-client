import JobCard from "../../components/JobCard/JobCard";

const Jobs = () => {
  return (
    <div className="">
      <div className="bg-green-600 h-80 bg-opacity-80">
        <div className="pt-20 text-center">
          <h1 className="text-[55px] font-['Agbalumo'] font-bold text-white">
            Job Listing
          </h1>
          <p className="text-[22px] mt-5 font-semibold text-white">
            We delivered blazing fast & striking work solution
          </p>
        </div>
      </div>
      <div className="container mt-10">
        <div>
          <p className="text-gray-500 font-semibold text-md">
            All <span className="text-black">28</span> jobs found
          </p>
        </div>
        {/* --- job card start --- */}
        <div className="grid grid-cols-1 gap-5 lg:grid lg:grid-cols-2 my-5">
          <JobCard />
          <JobCard />
        </div>
        {/* --- job card end --- */}
      </div>
    </div>
  );
};

export default Jobs;
