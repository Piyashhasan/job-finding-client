import { Link } from "react-router-dom";

const Employer = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <Link to="/get-start">
          <button className="px-5 py-2 bg-green-600 text-white hover:bg-green-700">
            Back
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center mb-10">
        <div className="w-[600px] bg-green-300 px-5 py-5 rounded-2xl">
          <h3 className="text-2xl mb-5 font-bold">Employer</h3>
          <form action="">
            <div className="flex items-center justify-between space-x-5 mb-3">
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  First Name
                </label>
                <br />
                <input
                  className="w-full px-5 py-2 rounded-full"
                  type="text"
                  placeholder="first name"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  Last Name
                </label>
                <br />
                <input
                  className="w-full px-5 py-2 rounded-full"
                  type="text"
                  placeholder="last name"
                />
              </div>
            </div>
            <div className="flex items-center justify-between space-x-5 mb-3">
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  Email
                </label>
                <br />
                <input
                  className="w-full px-5 py-2 rounded-full"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  Gender
                </label>
                <br />
                <div className="flex items-center space-x-2">
                  <input type="radio" id="male" value="male" name="gender" />
                  <label htmlFor="">Male</label>
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    name="gender"
                  />
                  <label htmlFor="">Female</label>
                  <input type="radio" id="other" value="other" name="gender" />
                  <label htmlFor="">Other</label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-5 mb-3">
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  Company Name
                </label>
                <br />
                <input
                  className="w-full px-5 py-2 rounded-full"
                  type="text"
                  placeholder="company name"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  Number of employee
                </label>
                <br />
                <input
                  className="w-full px-5 py-2 rounded-full"
                  type="number"
                  placeholder="number of employee"
                />
              </div>
            </div>
            <div className="flex items-center justify-between space-x-5">
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  Company Category
                </label>
                <br />
                <input
                  className="w-full px-5 py-2 rounded-full"
                  type="text"
                  placeholder="company category"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold" htmlFor="">
                  Your role in company
                </label>
                <br />
                <input
                  className="w-full px-5 py-2 rounded-full"
                  type="text"
                  placeholder="role in company"
                />
              </div>
            </div>

            <div className="flex items-center justify-between space-x-5 mt-10">
              <div className="w-full flex items-center space-x-2">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
                />
                <label htmlFor="">I agree to terms and conditions</label>
              </div>
              <div className="w-full flex items-center justify-end">
                <button
                  className="px-5 py-3 bg-green-600 rounded-full text-white hover:bg-green-700"
                  type="submit "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employer;
