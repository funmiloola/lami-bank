import Page from "../../../../components/Pagination";
const applicants = [
  {
    name: "Oluwatobi Adeyemi",
    ref: "REF5663809",
    bvn: "22105***342",
    idType: "Driver's License",
    status: "Pending",
    date: "02, March 2024 9PM",
  },
  {
    name: "Chinwe Adebayo",
    ref: "REF5663809",
    bvn: "10395***881",
    idType: "National ID",
    status: "Failed",
    date: "02, March 2024 9PM",
  },
  {
    name: "Kabir Olanrewaju",
    ref: "REF5663809",
    bvn: "34872***109",
    idType: "Voter’s Card",
    status: "Pending",
    date: "02, March 2024 9PM",
  },
  {
    name: "Mariam Ibrahim",
    ref: "REF5663809",
    bvn: "34872***109",
    idType: "Voter’s Card",
    status: "Verified",
    date: "02, March 2024 9PM",
  },
  {
    name: "Khalid Oladipo",
    ref: "REF5663809",
    bvn: "34872***109",
    idType: "Voter’s Card",
    status: "Verified",
    date: "02, March 2024 9PM",
  },
];
export default function Table() {
  return (
    <section className="mx-8 my-8 pt-4 border border-[#E2E4E9] rounded-[8px] ">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0  justify-between md:items-center px-4">
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
      <div className="py-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-[#475467] font-medium text-left bg-[#E4E7EC]">
            <tr>
              <th className="py-3 px-6">Applicant</th>
              <th className="py-3">Reference Number</th>
              <th className="py-3">BVN</th>
              <th className="py-3">ID Type</th>
              <th className="py-3">Status</th>
              <th className="py-3">Submission Date</th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((item, index) => (
              <tr key={index} className="border-b border-b-[#E4E7EC]">
                <td className="text-[#407BFF] pl-6 pr-4 py-4 underline">
                  {item.name}
                </td>
                <td className=" py-4 pr-4 text-[#475467]">{item.ref}</td>
                <td className="py-4 pr-4 text-[#475467]">{item.bvn}</td>
                <td className="py-4 pr-4 text-[#475467]">{item.idType}</td>
                <td className="py-4 pr-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-sm ${
                      item.status === "Pending"
                        ? "bg-[#F4840C1A] text-[#F4840C]"
                        : item.status === "Failed"
                          ? "bg-[#FFEFF4] text-[#EE606B]"
                          : "bg-[#ECFDF3] text-[#027A48]"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 text-[#475467]">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Page />
    </section>
  );
}
