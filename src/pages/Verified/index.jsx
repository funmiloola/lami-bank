export default function Verification() {
  return (
    <section className="flex flex-col items-center justify-center font-sans pt-18">
      <header className="flex gap-2 items-center">
        <img src="/Logo (1).svg" alt="logo" />
        <h1 className="text-[20px] font-tiempos font-semibold">Lami Bank</h1>
      </header>
      <div className="relative">
        <img src="/Clip path group.svg" alt="clip" />
        <img
          src="/Group (7).svg"
          alt=""
          className="absolute top-[32%] left-[32%] bg-[#46CC5C] rounded-full px-8 py-10 "
        />
      </div>

      <h2 className="text-[32px] font-semibold">Verification Successful!</h2>
      <p className="text-[#566268] text-base">
        Your Tier 3 account is being activated
      </p>
      <div className="bg-[#F5F9FF] py-6 px-2 rounded-[12px] w-[614px] mt-12 mb-4">
        <div className="flex items-center gap-4 pb-6">
          <div className="w-5 h-5 bg-[#46CC5C] rounded-full  flex flex-col  items-center justify-center text-white text-xs">
            <img src="/Mark-sign" alt="" />
            <div className="w-px h-20 bg-[#A1AEBE]"></div>
          </div>
          <p className="text-sm font-medium">Documents Verified</p>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center pr-4">
            <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
            <div className="w-px h-12 bg-[#A1AEBE]"></div>
            <div className="w-5 h-5 border-2 border-[#A1AEBE] rounded-full"></div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-15  justify-between">
              <p className="text-sm font-semibold">
                Account Activation in Progress
              </p>
              <p className="text-sm font-semibold">
                Estimated completion <br />{" "}
                <span className="text-xs font-normal"> Within 24 hours </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-[#465668] font-medium">Ready to Use</p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-semibold text-[20px] text-[#566268]">
        Reference Number:{" "}
        <span className="text-[#171C27] font-bolds pl-12">VRF-20250923458</span>
          </p>
          <div className="py-18">
              <button className="bg-[#407BFF] text-white rounded-lg px-50 py-2.5 cursor-pointer ">Continue to Dashboard</button>
          </div>
    </section>
  );
}
