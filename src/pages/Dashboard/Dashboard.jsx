export default function Dashboard() {
  const card = [
    {
      name: "Pending Verification",
      total: 125,
      icon: "/icon (9).svg",
      percentage: "12%",
      desc: "Compared to last week",
    },
    {
      name: "Approved Verification",
      total: 389,
      icon: "/icon (9).svg",
      percentage: "10%",
      desc: "Compared to last week",
    },
    {
      name: "Incomplete/Failed Verification",
      total: 24,
      icon: "/Icon-left (1).svg",
      percentage: "10%",
      desc: "Compared to last week",
    },
    {
      name: "Average Processing Time",
      total: "240mins",
      icon: "/icon (9).svg",
      percentage: "10%",
      desc: "Compared to last week",
    },
  ];
  return (
    <section className="px-8 pt-6 font-sans">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-bold">Dashboard</h1>
        <div className="flex items-center border border-[#D0D5DD] gap-3 py-2.5 px-4.75 rounded-[5px] cursor-pointer">
          <p>This week</p>
          <img src="/Vector (23).svg" alt="arrow-icon" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 gap-4.75">
        {card.map((c, index) => (
          <div
            key={index}
            className="border border-[#E4E7EC] rounded-[12px] p-4"
          >
            <h3 className="text-[#667185] font-semibold text-sm">{c.name}</h3>
            <p className="text-[32px] font-bold text-[#1D2739] pt-4">
              {c.total}
            </p>
            <div className="flex items-center gap-1 ">
                    <div className={`flex gap-1  px-1 border rounded-xl ${c.name === "Incomplete/Failed Verification" ? "border-[#FFDFE9] bg-[#FFDFE9]" : "border-[#1CA8941A] bg-[#1CA8941A]"}`}>
                <img src={c.icon} alt="" />
                        <span className={` font-medium text-xs ${c.name === "Incomplete/Failed Verification" ? "text-[#EE606B]" : "text-[#1CA894]"}`}>{c.percentage}</span>
              </div>
              <p className="text-xs font-medium text-[#98A2B3]">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
