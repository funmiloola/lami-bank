const cards = [
  { name: "Voter's Card", img: "/image 4.svg", status: "ID Card Failed" },
  {
    name: "Liveness Check",
    img: "/Frame 1618870715.svg",
    status: "Liveness Verified",
  },
];
const results = [
  { text: "✓", match: "BVN Data Matched" },
  { text: "✕", match: "ID Document Invalid", span: "VIN does not exist" },
  { text: "✓", match: "Address Proof Successful" },
  { text: "✓", match: "Liveness Check Passed" },
  { text: "✓", match: "Signature Update  Successful" },
];
export default function Card() {
  return (
    <section className="px-8 pt-4.75 pb-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:w-[86%]">
        {cards.map((c, index) => (
          <div
            key={index}
            className="border border-[#CED7D8] py-4.25 px-5 md:px-15 rounded-xl"
          >
            <h3 className="text-base font-semibold text-[#171C27] pb-4">{c.name}</h3>
            <div className=" flex flex-col gap-3  justify-center items-center">
              <img src={c.img} alt="" className=""/>
              <p className={`${typeof c.status === "string" && c.status.includes('Failed') ? "text-[#EE606B] bg-[#FFEFF4] px-2.5 py-0.5 rounded-[16px]" : "text-[#027A48] bg-[#ECFDF3] px-2.5 py-0.5 rounded-[16px]" }`}>{c.status}</p>
            </div>
          </div>
        ))}

        <div>
          <div className="border border-[#E4E7EC] px-5 md:px-15 py-4.25 rounded-xl">
            <h2 className="text-base font-semibold text-[#171C27]">
              Verification Results
            </h2>
            <ul className="flex flex-col justify-center  gap-4.5 pt-4">
              {results.map((r, index) => (
                <li className="flex gap-2 items-center">
                  <p
                    className={` px-2.75 py-1.5 rounded-full ${r.text === "✓" ? "bg-[#DCFCE7] text-[#166534]" : r.text === "✕" ? "bg-[#FEE2E2] text-[#B91C1C]" : ""}`}
                  >
                    {r.text}
                  </p>
                  <div className="flex flex-col gap-0.5 text-[#111827]">
                    {r.match}
                    {r.span && (
                      <span className="text-[#6B7280] text-sm">{r.span}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border border-[#E4E7EC] px-5 md:px-15 py-4.25 rounded-xl">
          <h2 className="text-base font-semibold text-[#171C27]">Actions</h2>
          <div className="flex flex-col gap-5 justify-center items-center pt-3">
            <button className="py-2.5 px-6 md:px-18 bg-[#407BFF] text-white font-medium rounded-lg cursor-pointer">Approve Verification</button>
            <button className=" px-5.75 md:px-17.25 py-2.5 text-[#374151] bg-[#F3F4F6] font-medium rounded-lg cursor-pointer">Request New ID Card</button>
            <button className="md:px-13.75 px-2 py-2.5 text-[#374151] bg-[#F3F4F6] font-medium rounded-lg cursor-pointer">Download All Documents</button>
            <button className="md:px-19 px-7.75 py-2.5 border border-[#E41D1D] text-[#EF4444] font-medium rounded-lg cursor-pointer">Reject Verification</button>
          </div>
        </div>
      </div>
    </section>
  );
}
