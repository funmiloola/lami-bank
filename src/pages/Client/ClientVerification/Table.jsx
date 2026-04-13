const data = [
  {
    documentType: "BVN Validation",
    volume: "4,287",
    successRate: "95%",
    avgTime: "0.3 sec",
    failureReason: "BVN not found (67%)",
  },
  {
    documentType: "Government ID",
    volume: "4,287",
    successRate: "87%",
    avgTime: "2.1 sec",
    failureReason: "Image quality (58%)",
  },
  {
    documentType: "Address Proof",
    volume: "4,287",
    successRate: "98%",
    avgTime: "1.8 sec",
    failureReason: "Document expired (72%)",
  },
];

export default function Table() {
    return (
        <section className="mt-8 bg-white rounded-xl border border-gray-200 pt-4 mb-12">
            <h2 className="text-base md:text-[24px] font-medium pl-4">Verification By Document Type</h2>
            <div className="">
            <div className="pt-4">
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between md:items-center px-4">
            <div className="flex gap-3 border border-[#E2E4E9] p-2 rounded-[8px] w-full md:w-[35%]">
              <img src="/Vector (25).svg" alt="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-[#E2E4E9] hover:bg-gray-200 p-2 rounded-[8px] cursor-pointer">
                <img src="/Vector (26).svg" alt="filter-icon" />
                <span>Filter</span>
                <img src="/Vector (27).svg" alt="dropdown-icon" />
              </div>
              <img src="/settings.svg" alt="settings-icon" />
            </div>
          </div>
        </div>
    <div className=" overflow-x-auto pt-4 px-4">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-3">Document Type</th>
            <th className="px-6 py-3">Volume</th>
            <th className="px-6 py-3">Success Rate</th>
            <th className="px-6 py-3">Avg. Time</th>
            <th className="px-6 py-3">Top Failure Reason</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {data.map((d, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium text-gray-800">
                {d.documentType}
              </td>
              <td className="px-6 py-4 text-gray-600">{d.volume}</td>
              <td className="px-6 py-4 text-gray-600">
                <span className="font-semibold text-green-600">
                  {d.successRate}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">{d.avgTime}</td>
              <td className="px-6 py-4 text-gray-500">
                {d.failureReason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
                </div>
                </div>
    </section>
  );
}