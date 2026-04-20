
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Sun', value: 40 },
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 40 },
  { day: 'Wed', value: 70 },
  { day: 'Thu', value: 80 },
  { day: 'Fri', value: 60},
  { day: 'Sat', value: 60 },
];
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-1 shadow-lg rounded-md border border-gray-100">
        <p className="text-[6px] text-[#70707A] pb-1">Sept 15, 2024</p>
        <div className="bg-[#F6F8FA] pl-1 py-2 pr-6 rounded-[3.49px]">
          <p className="text-[7px] font-medium text-gray-900">
            Percentage  {payload[0].value}%
          </p>
        </div>
      </div>
    );
  }
  return null;
};
export default function BookingChart() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-8 justify-between pt-8 px-8">
      <div className="bg-white p-4 w-full lg:w-2/3 border border-[#E4E7EC] rounded-[12px]">
        <p className="text-sm font-medium mb-4">Booking Trends</p>

       <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
         
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F8AFF" stopOpacity={0.1}/>
              <stop offset="90%" stopColor="#4F8AFF" stopOpacity={0}/>
            </linearGradient>
          </defs>

          
          <CartesianGrid vertical={false} stroke="#f0f0f0" />
          
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#475367', fontSize: 11 }}
            dy={10}
          />
          
                      <YAxis 
                          domain={[0, 100]}
  ticks={[0, 20, 40, 60, 80, 100]}
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#475367', fontSize: 11 }} 
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone" 
            dataKey="value"
            stroke="#4F8AFF"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
            activeDot={{ r: 6, strokeWidth: 0, fill: '#4F8AFF' }}
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      <div className="border border-[#E4E7EC] rounded-[12px] px-3 md:px-6 pt-5 pb-10 w-full lg:w-1/3">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-[#4C5D7F] text-sm">
            Recent Activity
          </h4>
          <p className="font-medium text-[#407BFF] text-[8px] md:text-[10px] hover:border-b hover:border-b-[#407BFF]">
            See All
          </p>
        </div>
        <ul className="flex flex-col gap-6 pt-4">
          <li className="flex items-center md:items-start justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/Vector (24).svg"
                alt="vector-icon"
                className="px-3 py-2 border border-[#F1FFF6] bg-[#F1FFF6] rounded-full"
              />
              <p className="text-[#011A3C] text-[10px] md:text-sm">
                New verification submitted by <br />{" "}
                <strong>Khalid Oladipo</strong>
              </p>
            </div>
            <p className="text-[#233862CF] text-[8px] md:text-[10px]">Feb 11, 2025</p>
          </li>
          <li className="flex items-center md:items-start justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/Group 1320.svg"
                alt="group-icon"
                className="px-3.75 py-2 border border-[#FFEFF4] bg-[#FFEFF4] rounded-full"
              />
              <p className="text-[#011A3C]  text-[8px] md:text-[10px] md:text-sm">
                <strong>
                  Maria Afolayan's ID verification <br />
                  failed
                </strong>{" "}
                - document unclear
              </p>
            </div>
            <p className="text-[#233862CF] text-[8px] md:text-[10px]">Feb 11, 2025</p>
          </li>
          <li className="flex items-center md:items-start justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/Group 1320.svg"
                alt="group-icon"
                className="px-3.75 py-2 border border-[#FFEFF4] bg-[#FFEFF4] rounded-full"
              />
              <p className="text-[#011A3C] text-[10px] md:text-sm">
                <strong>Oluwatobi Adeyemi's</strong> address <br /> document
                needs review
              </p>
            </div>
            <p className="text-[#233862CF] text-[8px] md:text-[10px]">Feb 11, 2025</p>
          </li>
          <li className="flex items-center md:items-start justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/Group 1320.svg"
                alt="group-icon"
                className="px-3.75 py-2 border border-[#FFEFF4] bg-[#FFEFF4] rounded-full"
              />
              <p className="text-[#011A3C]  text-[10px] md:text-sm">
                <strong>Sammy Yasir's</strong> address document <br /> needs
                review
              </p>
            </div>
            <p className="text-[#233862CF] text-[8px] md:text-[10px]">Feb 11, 2025</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
