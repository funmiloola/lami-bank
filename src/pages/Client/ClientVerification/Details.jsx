import Header from "../../../components/HeaderClient";
import HeaderSection from "../../../components/Header";

const metrics = [
  {
    metric: "API Usage",
    value: 347829,
    percentage: "12%",
    icon:'/icon (9).svg',
    comparison: "Compared to last week",
  },
  {
    metric: "Success Rate",
    value: "97%",
    percentage: "10%",
    icon:'/icon (9).svg',
    comparison: "Compared to last week",
  },
  {
    metric: "Avg Response Time",
    value: "243ms",
    percentage: "10%",
    icon:'/Icon-left (1).svg',
    comparison: "Compared to last week",
  },
  {
    metric: "Integration Status",
    value: "Healthy",
    comparison: "Last issue:24 days ago",
  },
];
export default function Details() {
  return (
    <section className="font-sans pt-2 md:pt-8">
          <Header className={`text-gray-900 hover:text-[#1CA894]`} />
          <div className="pt-6">
      <HeaderSection>
        <div className="flex gap-3 items-center">
          <img src="/arrow-left (1).svg" alt="" />
          <p className="font-medium text-[24px]">Lami bank</p>
          <p className="text-[#1CA894] text-[20px] py-0.5 px-3.5 rounded-[24px] bg-[#ECFDF3] font-medium">
            Active
          </p>
        </div>
              </HeaderSection>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 pt-8">
              {metrics.map((m, index) => (
                  <div key={index} className="border border-[#E4E7EC] rounded-xl p-4">
                      <h2 className="text-sm text-[#667185] font-medium">{m.metric}</h2>
                      <p className={` ${m.value === "Healthy" ? 'text-[#1CA894] w-fit text-[20px] bg-[#ECFDF3] font-semibold py-0.5 px-2 rounded-[23px] mt-6':'text-[32px] text-[#1D2739] font-bold pt-4'}`}>{m.value}</p>
                      {m.percentage != null ? (
                          <div className="flex items-center gap-1 pt-4">
                              <div className={`flex items-center gap-0.5 px-1 rounded-xl ${index === 2 ? 'bg-[#FFDFE9] text-[#EE606B]':'bg-[#ECFDF3] text-[#1CA894]'}`}>
                              <img src={m.icon} alt="" />
                                  <span>{m.percentage}</span>
                              </div>
                              <div>
                                  <p className="text-[#98A2B3] font-medium text-xs">{m.comparison}</p>
                              </div>
                          </div>
                      ) : (
                      <p className="text-[#98A2B3] font-medium text-xs pt-6">{m.comparison}</p>
                      )}
                  </div>
              ))}
          </div>
    </section>
  );
}
