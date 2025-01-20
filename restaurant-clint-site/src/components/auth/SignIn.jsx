import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function SignIn() {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleFromSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      const user = result.user;
      // console.log(user);
      navigate("/");
    });
  };
  return (
    <div className="max-w-4xl mx-auto">
      {" "}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <div>
              <Lottie animationData={LoginLottieData} loop={true} />
            </div> */}
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleFromSubmit}>
              <h1 className="font-semibold text-xl text-center font-poppins">
                Log In your account
              </h1>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="input  text-xs h-10 bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control mb-2 relative">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <button
                  className="absolute right-2 top-[50px]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input  text-xs h-10 bg-[#F3F3F3]"
                  required
                />
                <label className="label mt-2">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn  hover:text-black " type="submit">
                  Log In
                </button>
              </div>
            </form>
            <hr />
            {/* <div className="text-center py-5">
              <button onClick={handleGoogle}>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  className="w-10 h-10"
                  alt=""
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
