import job_details_banner from "../../assets/img/job-details-banner.jpg";
import { BsArrowRightShort, BsArrowRight } from "react-icons/bs";

const JobDetails = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-3 lg:grid lg:grid-cols-3 my-5">
        {/* --- left side start --- */}
        <div className="col-span-2">
          <div>
            <img
              className="w-full h-60 rounded-2xl"
              src={job_details_banner}
              alt="Hiring picture"
            />
          </div>
          {/* --- apply --- */}
          <div className="my-5 flex items-center justify-between">
            <p className="text-lg font-semibold text-green-600">
              React Developer
            </p>
            <button className="px-8 py-2 bg-green-700 text-white rounded-full hover:bg-green-600 cursor-pointer">
              Apply
            </button>
          </div>
          {/* --- overview -- */}
          <div className="mb-5">
            <p className="font-semibold text-green-600">Overview</p>
            <p className="text-justify mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              debitis aliquid nulla temporibus quo alias! Libero, recusandae
              sint ipsa nam laborum dicta officia cupiditate, iure consequuntur
              commodi explicabo nemo similique reiciendis ex saepe. Excepturi
              autem doloremque nisi quidem incidunt earum obcaecati, ex, qui
              exercitationem nihil hic cum, officia similique velit.
            </p>
          </div>
          {/* --- skill --- */}
          <div className="mb-5">
            <p className="font-semibold text-green-600">Skills</p>
            <div className="mt-2">
              <ul className="text-sm">
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>Html</span>
                </li>
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>Css</span>
                </li>
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>Tailwind Css</span>
                </li>
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>React</span>
                </li>
              </ul>
            </div>
          </div>
          {/* --- requirements --- */}
          <div className="mb-5">
            <p className="font-semibold text-green-600">Requirements</p>
            <div className="mt-2">
              <ul className="text-sm">
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>At least 1 year of experience</span>
                </li>
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>Fluent in English</span>
                </li>
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>Good communication</span>
                </li>
              </ul>
            </div>
          </div>
          {/* --- responsibility --- */}
          <div className="mb-5">
            <p className="font-semibold text-green-600">Responsibility</p>
            <div className="mt-2">
              <ul className="text-sm">
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>Front-end development</span>
                </li>
                <li className="flex items-center">
                  <BsArrowRightShort />
                  <span>Making reusable components</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mb-5" />
          {/* --- QA --- */}

          <div>
            <p className="font-semibold text-green-600">General Q&A</p>
            <div className="flex items-center justify-between space-x-5 mt-3">
              <div className="w-full">
                <input
                  className="w-full px-5 py-2 rounded-full border border-gray-500"
                  placeholder="Ask a question..."
                  type="text"
                />
              </div>
              <div>
                <button className="bg-green-500 px-3 py-3 rounded-full text-white hover:bg-green-600">
                  <BsArrowRight className="text-lg font-bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* --- left side end --- */}

        {/* --- right side start --- */}
        <div className="mx-10 space-y-5">
          <div className="bg-green-300 rounded-2xl p-5">
            <div className="mb-5">
              <p>Experience</p>
              <p className="font-bold">1 Year</p>
            </div>
            <div className="mb-5">
              <p>Work Level</p>
              <p className="font-bold">Easy</p>
            </div>
            <div className="mb-5">
              <p>Employment Type</p>
              <p className="font-bold">Full Time</p>
            </div>
            <div className="mb-5">
              <p>Salary Range</p>
              <p className="font-bold">25k - 30k</p>
            </div>
            <div className="mb-5">
              <p>Location</p>
              <p className="font-bold">Remote</p>
            </div>
          </div>
          <div className="bg-green-300 rounded-2xl p-5">
            <div className="mb-5">
              <p className="font-bold">Programming Hero</p>
            </div>
            <div className="mb-5">
              <p>Company Size</p>
              <p className="font-bold">Above 100</p>
            </div>
            <div className="mb-5">
              <p>Founded</p>
              <p className="font-bold">2001</p>
            </div>
            <div className="mb-5">
              <p>Email</p>
              <p className="font-bold">company.email@name.com</p>
            </div>
            <div className="mb-5">
              <p>Company Location</p>
              <p className="font-bold">Los Angeles</p>
            </div>
            <div className="mb-5">
              <p>Website</p>
              <p className="font-bold">https://website.com</p>
            </div>
          </div>
        </div>
        {/* --- right side end --- */}
      </div>
    </div>
  );
};

export default JobDetails;
