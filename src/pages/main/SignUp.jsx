// const SignUp = () => {
//   return (
//     <div className="container">
//       <h1>Sign up page</h1>
//     </div>
//   );
// };

// export default SignUp;

import Lottie from "lottie-react";
import loginAnimation from "../../assets/img-json/login-animation.json";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { handleSubmit, register, watch } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [password, confirmPassword]);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="container my-5">
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 items-center">
        {/* --- left side start --- */}
        <div className="z-[-9999]">
          <div className="px-24">
            <Lottie animationData={loginAnimation} loop={false} />
          </div>
        </div>
        {/* --- left side end --- */}

        {/* --- right side FORM start --- */}
        <div className="bg-green-200 px-16 py-5  shadow-xl rounded-2xl mx-10">
          <div className="text-center my-5">
            <h1 className="text-[30px] text-black">Create Account</h1>
            <p className="text-[16px]">
              Already have an account?{" "}
              <Link className="underline" to="/sign-in">
                Sign In
              </Link>{" "}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5 space-y-2">
              <label className="font-bold text-gray-700">Email</label>
              <div className="w-full">
                <input
                  className="w-full px-5 py-3 outline-0 rounded-md"
                  placeholder="johndoe@gmail.com"
                  {...register("email", { required: true })}
                />
              </div>
            </div>

            <div className="mb-5 space-y-2">
              <label className="font-bold text-gray-700">Password</label>
              <div className="">
                <input
                  className="w-full px-5 py-3 outline-0 rounded-md  "
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div className="mb-5 space-y-2">
              <label className="font-bold text-gray-700">
                Confirm Password
              </label>
              <div className="">
                <input
                  className="w-full px-5 py-3 outline-0 rounded-md"
                  placeholder="Enter Confirm Password"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
            </div>

            <div className="">
              {btnDisable ? (
                <button
                  className="bg-[#00BF58] px-4 py-3 w-full text-white rounded-md font-semibold"
                  type="submit"
                >
                  LOGIN
                </button>
              ) : (
                <button
                  className="bg-[#31795a] px-4 py-3 w-full text-white rounded-md font-semibold"
                  type="submit"
                  disabled
                >
                  LOGIN
                </button>
              )}
            </div>
          </form>

          <div className="flex items-center justify-between mt-5">
            <div className="bg-gray-500 w-48 h-[1px]"></div>
            <div>
              <p>OR</p>
            </div>
            <div className="bg-gray-500 w-48 h-[1px]"></div>
          </div>

          {/* google login button start */}
          <div className="mt-5">
            <button className="bg-white w-full py-4 rounded-md font-semibold flex items-center justify-center space-x-3">
              <FcGoogle className="text-2xl" />
              <span>Login with Google</span>
            </button>
          </div>
          {/* google login button start */}
          {/* --- right side FORM end --- */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
