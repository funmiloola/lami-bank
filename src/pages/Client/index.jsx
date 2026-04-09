import SidebarClient from "../../components/SidebarClient";
import { Outlet } from "react-router-dom";
export default function Client() {
  return (
    <section className="flex  w-full h-screen pl-4 md:pl-0">
      <div className="w-[5%] lg:w-1/7">
        <SidebarClient />
      </div>
      <div className="w-[90%] lg:w-6/7 md:overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
}
