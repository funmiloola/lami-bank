function ProgressBar({ value,trackColor, fillColor,width = "100%",addValue }) {
  return (
      <div className={`relative rounded-full h-4.75 ${trackColor}`} style={{width}}>
      <div
        className={`h-4.75 rounded-full ${fillColor}`}
        style={{ width: `${value}%` }}
          ></div>
           <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[#263238] text-[10px]">
        {addValue}
      </span>
    </div>
  );
}

export default function SideStats() {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="bg-white rounded-xl py-4.5 px-7 border border-[#E4E7EC] w-full lg:w-[415px]">
              <h4 className="text-base font-bold pb-5.25">API Usage</h4>
                <ProgressBar value={70} fillColor="bg-[#45B2C7]"  trackColor="bg-[#45B2C7]/20" width="100%" />
        <p className="text-sm text-[#171C27] pb-2">
          Usage: 347,829 / 500,000 calls (69.6%)
              </p>
              <p className="text-sm text-[#171C27]">Renewal: May 20, 2025 (8 days remaining)</p>
      
        <p className="text-sm text-[#171C27] pt-2">
          Plan: Enterprise
        </p>
      </div>

      <div className="bg-white rounded-xl py-4.5 px-5.5 border border-[#E4E7EC] w-full lg:w-[415px]">
        <h4 className="text-base font-bold text-[#263238] pb-3">API Performance</h4>

        <div className="pb-3 flex items-center justify-between ">
          <p className="text-sm text-[#263238] ">Avg. Response Time</p>
          <ProgressBar value={25} addValue="243ms"  trackColor="bg-[#5FDAF2]/20" fillColor="bg-[#5FDAF2]" width="45%"/>
        </div>

        <div className="pb-3 flex items-center justify-between">
          <p className="text-sm text-[#263238]">Error Rate</p>
          <ProgressBar value={5} addValue="0.8%" trackColor="bg-[#FF3B30]/20" fillColor="bg-[#FF3B30]"  width="45%"/>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-[#263238] ">Uptime</p>
          <ProgressBar value={99} addValue="99.98%" fillColor="bg-[#70E182]" width="45%"/>
        </div>
      </div>
    </div>
  );
}