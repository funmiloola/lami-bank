import { Link } from "react-router-dom";
export default function Onboard() {
  const data = [
    {
      name: "Bank Verification Number (BVN)",
      desc: "We'll verify it using a secure API.",
      icon: "/Frame 20.jpg",
    },
    {
      name: "Government-issued ID (choose one)",
      desc: "Driver’s License, PVC, Passport, or National ID",
      icon: "/image 1.svg",
    },
    {
      name: "Proof of Address",
      desc: "Utility bill, bank statement, or tenancy agreement",
      icon: "/OBJECTS.svg",
    },
    {
      name: "Working Camera",
      desc: "Needed for a real-time selfie",
      icon: "/Frame 22.svg",
    },
    {
      name: "Signature upload or Input",
      desc: "You’ll create or upload your signature during the process",
      icon: "/Group (3).svg",
    },
  ];
  return (
    <section className="block mid:flex w-full  font-dm h-screen">
      <div className="w-full mid:w-3/5 px-10 xl:pr-18 mid:pl-16 xl:pl-23 pt-15 overflow-y-auto">
        <h1 className="text-base font-tiempos mid:text-[24px] xl:text-[32px] font-semibold pb-1.5">
          Get Ready to Activate Your Tier 3 Account
        </h1>
        <p className="text-[#566268] text-[12px] mid:text-base">
          To make the process smooth and secure, please have the following
          documents ready
        </p>
        <div className="flex gap-1 items-center mid:gap-2.5 pt-1 pb-10">
          <img src="/timer.svg" alt="timer" className="w-3.5 mid:w-6" />
          <span className="text-[#566268] text-[12px] mid:text-base">
            Estimated time of completion: 4–5 minutes
          </span>
        </div>
        <div className="flex flex-col gap-4.5">
          {data.map((d, index) => (
            <div
              key={index}
              className="flex gap-5 mid:gap-0 justify-between items-center  border border-[#D9D9D9] rounded-xl py-4 mid:py-7.25 px-5.5"
            >
            <div className="flex gap-3  items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 mid:w-7.5 mid:h-7.5 border border-[#D5D7DA] appearance-none rounded-sm mid:rounded-[7.5px]"
                />

                <div>
                  <h3 className="text-base mid:text-xl font-semibold">
                    {d.name}
                  </h3>
                  <p className="text-[#566268] text-xs mid:text-base">{d.desc}</p>
                </div>
              </div>
              <div className="bg-[#EEEEEE] flex items-center justify-center min-w-[30px] min-h-[30px] mid:min-w-[60px] mid:min-h-[60px] rounded-md mid:rounded-xl">
                <img
                  src={d.icon}
                  alt="icon"
                  className="w-4 h-4 mid:w-8 mid:h-8 "
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border border-[#D9D9D9] mt-12 py-5.25 px-5.5 rounded-xl">
          <div className="flex gap-2 mid:gap-4 items-center">
            <img src="/shield.svg" alt="shield-icon" className="w-5 h-5 mid:w-6 mid:h-6" />
            <p className="font-semibold text-base mid:text-xl">Why we ask for these</p>
          </div>
          <div>
            <img src="/Vector.svg" alt="vector" className="w-3 h-3 mid:w-4 mid:h-4"/>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-12 pb-8 justify-center items-center">
                  <Link to="/verification/bvn">
            <button className="py-2 px-10 mid:px-30 xl:px-55 font-semibold text-[#FFFFFF] bg-[#407BFF] rounded-lg cursor-pointer font-inter">
              I Have These Ready
            </button>
          </Link>
          <button className="cursor-pointer text-[#535862] font-semibold">
            I'll Continue Later
          </button>
        </div>
      </div>
      <div className="hidden mid:block w-2/5  min-h-screen bg-gradient-to-b from-[rgba(184,225,255,1)] to-[rgba(64,123,255,1)]">
        <h1 className="flex justify-end items-center gap-2 pr-12.5 pt-17">
          <img src="/Logo (1).svg" alt="logo" />
          <span className="font-semibold text-xl font-tiempos">Lami Bank</span>
        </h1>
      </div>
    </section>
  );
}
