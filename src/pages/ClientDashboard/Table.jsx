const clients = [
  {
    name: "Lami Bank",
    type: "Digital Bank",
    verifications: 1200,
    successRate: "95%",
    avgTime: "2.1 mins",
    errors: 3,
    status: "Active",
  },
  {
    name: "Cidal MicroFinance Bank Ltd",
    type: "Digital Bank",
    verifications: 860,
    successRate: "87%",
    avgTime: "3.0 mins",
    errors: 5,
    status: "Active",
  },
  {
    name: "Remifast",
    type: "Remittance",
    verifications: 430,
    successRate: "98%",
    avgTime: "4.2 mins",
    errors: 12,
    status: "Active",
  },
  {
    name: "SecureTrust Bank",
    type: "Digital Bank",
    verifications: 100,
    successRate: "72%",
    avgTime: "2.5 mins",
    errors: 23,
    status: "Inactive",
  },
  {
    name: "Hestin Cryto",
    type: "Crypto Wallet",
    verifications: 200,
    successRate: "69%",
    avgTime: "2.9 mins",
    errors: 20,
    status: "Active",
  },
];
export default function Table() {
  return (
    <div className="font-sans pt-6 px-8 py-8">
      <h2 className="font-medium text-[20px] ">Clients</h2>
      <div className=" mt-4 border border-[#E2E4E9] rounded-[8px]">
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
        <div className="bg-white rounded-lg overflow-x-auto pt-6">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-500 text-xs uppercase">
              <tr>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Verifications Today</th>
                <th className="px-6 py-4">Success Rate</th>
                <th className="px-6 py-4">Avg. Time</th>
                <th className="px-6 py-4">API Errors</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="">
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-b-[#E4E7EC]"
                >
                  <td className="px-6 py-4 text-blue-500 cursor-pointer">
                    {client.name}
                  </td>

                  <td className="px-6 py-4">{client.type}</td>

                  <td className="px-6 py-4">{client.verifications}</td>

                  <td className="px-6 py-4">{client.successRate}</td>

                  <td className="px-6 py-4">{client.avgTime}</td>

                  <td className="px-6 py-4">{client.errors}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        client.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
