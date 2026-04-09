import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
export default function DashboardSection() {
  return (
    <div className="flex w-full h-screen pl-4 md:pl-0">
      <div className="w-[5%] lg:w-1/7">
        <Sidebar />
      </div>
      <div className="w-[90%] lg:w-6/7 md:overflow-y-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
