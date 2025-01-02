import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function MainLayOut() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
