export default function LivenessDetails() {
  const list = [
    "Find a well-lit area (avoid harsh shadows)",
    "Remove glasses and face coverings",
    "Follow the instructions and move slowly",
    "Keep a neutral expression",
  ];
  return (
    <section className="font-sans pt-20 px-23">
      <h2 className="text-[24px] font-semibold">About the Liveness Check</h2>
      <div className="flex gap-4 items-start border bg-white border-white rounded-lg px-6.5 py-5 mt-5">
        <img src="/circle-help.svg" alt="" />
        <div>
          <h3 className="font-semibold text-lg">Why we need this step</h3>
          <p className="text-base text-[#566268]">
            This quick video check helps confirm you’re a real person present
            during the verification process, protecting your account from
            potential fraud.
          </p>
        </div>
      </div>
      <div  className="flex gap-4 items-start border bg-white border-white rounded-lg px-6.5 py-5 mt-5">
        <img src="/shield-check.svg" alt="" />
        <div>
          <h3 className="font-semibold text-lg">Your privacy is protected</h3>
          <p className="text-base text-[#566268]">
            The video is not stored permanently and is only used to verify your
            identify with our secure systems. Your privacy is our priority.
          </p>
        </div>
      </div>
      <div className="border bg-white border-white rounded-lg px-6.5 py-5 mt-5">
        <h2 className="flex gap-2 items-center">
          <img src="/Icons (2).svg" alt="" />
          <span className="font-semibold text-lg">Tips for success</span>
        </h2>
        <ul className="pt-8 flex flex-col gap-8">
          {list.map((l, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="border border-[#E8F1FA] bg-[#E8F1FA] rounded-full text-[#407BFF] py-0.5 px-2.5 font-semibold">{index + 1}</span>
              <span className="text-[#566268] text-base">{l}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2.5 bg-white rounded-xl py-4.25 px-6 my-15">
        <img src="/lock-keyhole(1).svg" alt="" />
        <p className="font-semibold text-[20px] text-[#407BFF]">
          Bank-grade security protects your data Compliant with CBN regulations
        </p>
      </div>
    </section>
  );
}
