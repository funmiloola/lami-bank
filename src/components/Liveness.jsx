export default function Liveness({nextStep}) {
  return (
    <section className="pt-15 font-sans">
      <h2 className="text-[24px] mid:text-[32px] font-semibold">Quick Liveness Check</h2>
      <p className="text-[#566268] text-base pb-6">
        We need to confirm your presence for additional security
      </p>
      <div className="border bg-[#1F2937] border-[#1F2937] flex flex-col justify-center items-center py-10 gap-12">
        <h4 className="text-white text-center mid:text-left text-xs mid:text-base">
          Position your face in the oval and follow the instructions
        </h4>
        <img src="/Facial ID.svg" alt="facial-id" />
      </div>
      <div className="my-6 flex flex-col gap-7 justify-center border border-[#E0E0E0] rounded-md py-3 mid:py-6 px-3 mid:px-6.5">
        <div className="flex gap-2.5 mid:gap-5 items-center">
          <span className="border border-[#E8F1FA] bg-[#E8F1FA] rounded-full text-[#407BFF] py-1.5 px-2.5 font-semibold">
            1
          </span>
          <span className="text-base mid:text-xl font-semibold">
            Look Straight into the Camera
          </span>
        </div>
        <div className="flex gap-2.5 mid:gap-5 items-center">
          <span className="font-semibold text-[#AEAEAE] border border-[#ECEDEE] bg-[#ECEDEE] rounded-full  py-1.5 px-2.5">
            2
          </span>
          <span className="text-base mid:text-xl font-semibold text-[#566268]">
            Turn your Head Slowly to the Right
          </span>
        </div>
          </div>
           <div className="flex justify-center items-center pt-15 mid:pt-22 pb-10">
          <button
            onClick={nextStep}
            className="border border-[#407BFF] bg-[#407BFF] text-white py-2.5 px-15 mid:px-55 rounded-lg font-semibold cursor-pointer"
          >
            Continue
          </button>
        </div>
    </section>
  );
}
