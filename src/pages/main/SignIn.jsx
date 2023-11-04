import Lottie from "lottie-react";
import loginAnimation from "../../assets/img-json/login-animation.json";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  googleAuth,
  handleErrorMessage,
  signInUserEmailPassword,
} from "../../features/auth/authSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SignIn = () => {
  const { isLoading, isSuccess, email, isError, error } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (!isLoading && isSuccess && email) {
      toast.success("Successfully Sign in..", { id: "auth" });
      navigate("/");
    }
    if (!email && isError && error) {
      toast.error(error, { id: "auth" });
      dispatch(handleErrorMessage());
    }
  }, [isLoading, isSuccess, email, isError, error, navigate, dispatch]);

  const onSubmit = (data) => {
    // Handle form submission here
    const { email, password } = data;
    dispatch(signInUserEmailPassword({ email, password }));
    reset();
  };

  // --- google auth ---
  const handleGoogleAuth = () => {
    dispatch(googleAuth());
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
        <div className="bg-green-200 px-16 py-10  shadow-xl rounded-2xl mx-10">
          <div className="text-center mb-5">
            <h1 className="text-[30px] text-black">Hi, Welcome Back!</h1>
            <p className="text-[16px]">
              Still do not have an account?{" "}
              <Link className="underline" to="/sign-up">
                Sign Up
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
                  className="w-full px-5 py-3 outline-0 rounded-md"
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div className="">
              <button
                className="bg-[#00BF58] px-4 py-3 w-full text-white rounded-md font-semibold"
                type="submit"
              >
                LOGIN
              </button>
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
            <button
              onClick={handleGoogleAuth}
              className="bg-white w-full py-4 rounded-md font-semibold flex items-center justify-center space-x-3"
            >
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

export default SignIn;
