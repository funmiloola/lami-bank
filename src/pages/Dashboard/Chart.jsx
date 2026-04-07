import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Sun", value: 40 },
  { day: "Mon", value: 60 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 65 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 60 },
];
const activities = [];
export default function BookingChart() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-8 justify-between pt-8 px-8">
      <div className="bg-white p-4 rounded-xl w-full lg:w-2/3 border border-[#E4E7EC] rounded-[12px]">
        <p className="text-sm font-medium mb-4">Booking Trends</p>

        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} style={{outline:"none"}}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ stroke: "#94a3b8", strokeDasharray: "4 4" }}
              content={({ active, payload, label }) => {
                if (!active || !payload) return null;

                return (
                  <div className="bg-white shadow-lg rounded-lg px-3 py-2 text-xs">
                    <p className="font-semibold">{label}</p>
                    <p>{payload[0].value}%</p>
                  </div>
                );
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#2563eb" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="border border-[#E4E7EC] rounded-[12px] px-6 pt-5 pb-10 w-full lg:w-1/3">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-[#4C5D7F] text-sm">
            Recent Activity
          </h4>
          <p className="font-medium text-[#407BFF] text-[10px] hover:border-b hover:border-b-[#407BFF]">
            See All
          </p>
        </div>
        <ul className="flex flex-col gap-6 pt-4">
          <li className="flex items-start justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/Vector (24).svg"
                alt="vector-icon"
                className="px-3 py-2 border border-[#F1FFF6] bg-[#F1FFF6] rounded-full"
              />
              <p className="text-[#011A3C] text-sm">New verification submitted by <br /> <strong>Khalid Oladipo</strong></p>
            </div>
            <p className="text-[#233862CF] text-[10px]">Feb 11, 2025</p>
          </li>
          <li className="flex items-start justify-between">
            <div className="flex gap-3 items-center">
              <img src="/Group 1320.svg" alt="group-icon"  className="px-3.75 py-2 border border-[#FFEFF4] bg-[#FFEFF4] rounded-full" />
              <p className="text-[#011A3C] text-sm"><strong>Maria Afolayan's ID verification <br />failed</strong> - document unclear</p>
            </div>
            <p className="text-[#233862CF] text-[10px]">Feb 11, 2025</p>
                  </li>
                   <li className="flex items-start justify-between">
            <div className="flex gap-3 items-center">
              <img src="/Group 1320.svg" alt="group-icon"  className="px-3.75 py-2 border border-[#FFEFF4] bg-[#FFEFF4] rounded-full" />
              <p className="text-[#011A3C] text-sm"><strong>Oluwatobi Adeyemi's</strong> address <br /> document needs review</p>
            </div>
            <p className="text-[#233862CF] text-[10px]">Feb 11, 2025</p>
                  </li>
                  <li className="flex items-start justify-between">
            <div className="flex gap-3 items-center">
              <img src="/Group 1320.svg" alt="group-icon"  className="px-3.75 py-2 border border-[#FFEFF4] bg-[#FFEFF4] rounded-full" />
              <p className="text-[#011A3C] text-sm"><strong>Sammy Yasir's</strong> address document <br /> needs review</p>
            </div>
            <p className="text-[#233862CF] text-[10px]">Feb 11, 2025</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
