import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();
  return (
    <div className="bg-white md:bg-[#101928] font-sans h-screen pt-8">
      <aside className="block md:hidden" onClick={() => setOpenSidebar(true)}>
        <img
          src="/hamburger-menu-more-svgrepo-com (1).svg"
          alt="h-icon"
          className="w-6 h-6"
        />
      </aside>
      <div
        className={`${
          openSidebar
            ? "fixed z-10 top-0 left-0 w-[60%] shadow-lg px-3 bg-[#101928] inset-0"
            : "hidden md:block md:h-full"
        }`}
      >
        <div className="absolute top-2 right-4 md:hidden border border-gray-300 px-1 py-0.25 rounded-md cursor-pointer">
          <img
            src="/icons8-cross-sign-48.png"
            alt=""
            className="w-6 h-6"
            onClick={() => setOpenSidebar(false)}
          />
        </div>
        <header className="flex gap-2 items-center pt-10 md:pt-0 px-4">
          <img src="/Logo (5).svg" alt="" />
          <h2 className="font-tiempos text-white block md:hidden lg:block ">
            Lami Bank
          </h2>
        </header>
        <div className="pt-6 flex flex-col justify-between h-[96%]">
          <ul className="flex flex-col gap-5 ">
            <Link to="/dashboard">
              <li
                className={`flex gap-3 items-center py-2 px-4 ${location.pathname === "/dashboard" ? "bg-[#1D2739]" : ""}`}
              >
                <img src="/home.svg" alt="home-icon" />
                <span className="text-white font-inter font-semibold text-sm block md:hidden lg:block">
                  Dashboard
                </span>
              </li>
            </Link>
            <Link to="v-queue">
              <li
                className={`flex gap-3 items-center py-2 px-4  ${location.pathname.includes("v-queue") ? "bg-[#1D2739]" : ""}`}
              >
                <img src="/icon.svg" alt="verification-icon" />
                <span className="text-white font-inter font-semibold text-sm block md:hidden lg:block">
                  Verification Queue
                </span>
              </li>
            </Link>
          </ul>
          <div className="bg-gradient-to-b from-[rgba(15,22,36,0)] to-[rgba(6,64,181,1)] p-6 ">
            <img src="/Frame 116 (1).svg" alt="" className="h-25" />
            <p className="font-inter font-semibold text-sm lg:text-base text-white">
              Need Help?
            </p>
            <p className="text-[#98A2B3] font-inter text-sm">
              Contact our technical support or read some of our FAQ’S
            </p>
            <div className="pt-5 flex flex-col lg:flex-row gap-1.5 lg:gap-3 items-center">
              <p className="text-[#F56630] font-semibold font-inter text-sm">
                Contact Support
              </p>
              <p className="text-[#98A2B3] font-inter text-sm font-medium">
                Close
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
