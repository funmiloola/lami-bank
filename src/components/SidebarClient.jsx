import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./ClientModal";
export default function SidebarClient() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal,setOpenModal] = useState(false)
  const location = useLocation();
  return (
    <section className="bg-white md:bg-[#101928] font-sans h-screen pt-6 ">
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
        <header className="pt-20 md:pt-0 px-4">
          <img src="/image 6.svg" alt="" className="" />
        </header>
        <div className="flex flex-col  justify-between h-[90%]">
          <ul className="flex flex-col gap-6 pt-5 md:pt-15 ">
            <Link to="/dashboard">
              <li
                onClick={() => setOpenSidebar(false)}
                className={`flex gap-3  py-2 px-4 items-center cursor-pointer  ${location.pathname === "/dashboard" ? "bg-[#1D2739]" : "hover:bg-gray-700"}`}
              >
                <img src="/home.svg" alt="home-icon" />
                <span className="text-white font-inter font-semibold text-sm block md:hidden lg:block">
                  Dashboard
                </span>
              </li>
            </Link>
            <Link to="c-v-queue">
              <li
                onClick={() => setOpenSidebar(false)}
                className={`flex gap-3 items-center  py-2 px-4 cursor-pointer ${location.pathname.includes("c-v-queue") ? "bg-[#1D2739]" : "hover:bg-gray-700"}`}
              >
                <img src="/icon.svg" alt="verification-icon" />
                <span className="text-white font-inter font-semibold text-sm block md:hidden lg:block">
                  Verification Queue
                </span>
              </li>
            </Link>
          </ul>
          <div onClick={()=>setOpenModal(true)} className="bg-[#1D2739] w-fit  px-20 py-1 rounded-md text-white cursor-pointer  ml-4 hover:text-[#49B0C9]">Logout</div>
        </div>
      </div>
      {openModal && <Modal onClick={()=>setOpenModal(false)}/>}
    </section>
  );
}
