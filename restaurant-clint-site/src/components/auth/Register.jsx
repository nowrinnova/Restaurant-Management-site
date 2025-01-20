import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleFromSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = event.target.email.value;
    const name = event.target.name.value;
    const photo_url = event.target.photo_url.value;
    const password = event.target.password.value;
    const newUser = { email: email, name: name, photo_url: photo_url };
    console.log(newUser);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        axiosPublic.post("/users", newUser).then((res) => {
          console.log("user added");
          navigate("/");
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        {" "}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              {/* <div>
                <Lottie animationData={RegisterLottieData} loop={true} />
              </div> */}
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleFromSubmit}>
                <h1 className="font-semibold text-xl text-center font-poppins">
                  Register your account
                </h1>
                <div className="form-control mt-2">
                  <label className="label">
                    <span className="label-text font-semibold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input  text-xs h-10 bg-[#F3F3F3]"
                    required
                  />
                </div>
                <div className="form-control mt-2">
                  <label className="label">
                    <span className="label-text font-semibold">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo_url"
                    placeholder="Enter your photo Url"
                    className="input  text-xs h-10 bg-[#F3F3F3]"
                    required
                  />
                </div>
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
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
