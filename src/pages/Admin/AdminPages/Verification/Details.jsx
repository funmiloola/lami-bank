const cardDetails = [
  {
    type: "Applicant",
    details: "Chinwe Adebayo",
    desc: "BVN",
    num: "22279849372",
  },
  {
    type: "Reference Number",
    details: "REF256E8R90",
    desc: "Address Proof",
    img: "/iconoir_open-in-browser.svg",
    num: "Img_22134242-5423.jpg",
  },
  {
    type: "ID Type",
    details: "Voter's Card",
    desc: "Signature Upload",
    img: "/iconoir_open-in-browser.svg",
    num: "Img_22134242-5423.jpg",
  },
];
export default function Details() {
  return (
    <section className="pt-6 font-sans px-4 md:px-8">
      <div className="flex items-center gap-4 md:gap-8">
        <img src="/arrow-left.svg" alt="arrow-left-icon" />
        <h2 className="text-base md:text-lg font-medium">Verification Details - Chinwe Adebayo</h2>
      </div>
      <div className="flex items-center gap-4.5 bg-[#FEF2F2] rounded-[12px] px-5 py-2 w-full lg:w-[86%] mt-5">
        <p className="text-[#B91C1C] text-base font-bold border border-[#FEF2F2] px-2.25 py-0.25 bg-[#FEE2E2] rounded-full">!</p>
        <div>
          <p className="text-[#B91C1C] font-bold">Failed Verification: VIN does not exist</p>
          <p className="text-[14px] text-[#B91C1C]">
            The submitted National ID is FAKE. Customer needs to provide a
            valid, unexpired ID document.
          </p>
        </div>
      </div>
      <div className="pt-4.5 grid grid-cols-1 md:grid-cols-3 w-full lg:w-[86%] border border-[#E4E7EC] rounded-2xl px-6 py-6 mt-4.5">
        {cardDetails.map((detail, index) => (
          <div key={index}>
            <div className="flex flex-col gap-8">
              <div className={`${index > 0 && "md:border-l md:border-[#E2E4E9] md:pl-4"}`}>
                <h3>{detail.type}</h3>
                <p className="pt-2 text-[#0A0D14] font-medium">{detail.details}</p>
                    </div>
                    <div className={`${index > 0 && "md:border-l md:border-[#E2E4E9] md:pl-4"}`}>
                        <h4 className="text-[#0A0D14CC]">{detail.desc}</h4>
                        <div className="flex gap-2.75 items-center pt-2">
                         {detail.img && (<img src={detail.img} alt="" />)}   
                            <span className="text-[#0A0D14] font-medium">{ detail.num}</span>
                        </div>
                    </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
