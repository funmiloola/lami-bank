import HeaderSection from "../../components/Header";
import Header from "../../components/HeaderClient";

export default function Dashboard() {
  const stats = [
    {
      icon: "/users-round.svg",
      title: "Active Clients",
      value: "240",
      icn: "/icon (9).svg",
      perc: "5%",
      change: "compared to last month",
    },
    {
      icon: "/badge-check.svg",
      title: "Verifications",
      value: "12,070",
      icn: "/icon (9).svg",
      perc: "9%",
      change: "compared to last month",
    },
    {
      icon: "/file-stack.svg",
      title: "API Calls",
      value: "35,760",
      icn: "/icon (9).svg",
      perc: "3%",
      change: "compared to last month",
    },
  ];
  return (
    <section>
      <div className="bg-[#101928] border my-3.75 mx-3.5 rounded-lg font-sans px-5.75">
        <Header className={`text-white hover:text-gray-300`} />
        <div className="pt-6 pb-4">
          <HeaderSection>
            <div className=" flex gap-4 items-center">
              <div className="flex gap-2.5 md:gap-5 items-center">
                <img
                  src="/home (1).svg"
                  alt=""
                  className="w-3 h-3 md:w-5 md:h-5"
                />
                <span className="text-white text-xs md:text-base">
                  Dashboard
                </span>
              </div>
              <div className="flex gap-2.5 md:gap-5 items-center">
                <img
                  src="/Vector (29).svg"
                  alt=""
                  className="w-3 h-3 md:w-5 md:h-5"
                />
                <span className="text-white text-xs md:text-base">
                  Client Management
                </span>
              </div>
            </div>
          </HeaderSection>
          <section class="flex flex-col items-center md:items-start lg:flex-row justify-between gap-10 md:gap-6 pt-8">
            <div>
              <h1 className="text-white font-bold text-[24px] md:text-[32px]">
                Morning, Amanda
              </h1>
              <p className="font-medium text-[#D9D9D9]">
                Track and manage your client here
              </p>

              <div className="bg-[#45B2C7] flex flex-col md:flex-row items-center gap-6 rounded-[16px] px-[15px] py-[17px]  xl:px-[20px] md:py-[25px] mt-5 md:mt-10">
                <div>
                  <h3 className="text-white font-medium text-base xl:text-lg">
                    All your Clients in One Place
                  </h3>
                  <p className="text-white text-sm xl:text-base pt-3">
                    Keep track of all your clients and <br /> manage all their
                    activities.
                  </p>
                </div>

                <button className="bg-white text-[#45B2C7] text-xs py-2 px-3 xl:px-6 rounded-lg cursor-pointer">
                  Add New Client
                </button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 w-[270px] md:w-full  md:grid-cols-3 gap-6 md:gap-3 xl:gap-3 ">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white  px-4 py-13 rounded-[12px]"
                  >
                    <div className="">
                      <img
                        src={stat.icon}
                        alt={stat.title}
                        className="p-4 rounded-full border border-[#E4E7EC]"
                      />
                    </div>

                    <p className="pt-2 text-xs text-[#475367]">{stat.title}</p>

                    <h2 className="text-[#344054] font-medium text-[24px] pt-2">
                      {stat.value}
                    </h2>
                    <div className="flex gap-1.5 pt-2">
                      <div className="bg-[#E7F6EC] rounded-[10px] px-0.5 flex gap-0.5 items-center text-xs font-medium">
                        <img src={stat.icn} alt="" />
                        <span> {stat.perc} </span>
                      </div>
                      <span className="text-[10px] text-[#7A7A9D]">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
