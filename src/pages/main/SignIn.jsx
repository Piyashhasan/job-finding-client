import Lottie from "lottie-react";
import loginAnimation from "../../assets/img-json/login-animation.json";

const Login = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
        {/* --- left side start --- */}
        <div className="z-[-9999]">
          <div className="px-24">
            <Lottie animationData={loginAnimation} loop={false} />
          </div>
        </div>
        {/* --- left side end --- */}

        {/* --- right side start --- */}
        <div className="bg-green-300 ">
          <h1>right side</h1>
        </div>
        {/* --- right side end --- */}
      </div>
    </div>
  );
};

export default Login;
