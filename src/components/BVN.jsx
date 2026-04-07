import { useForm } from "react-hook-form";
import { TiTick } from "react-icons/ti";
export default function BVNSection({nextStep}) {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const bvnValue = watch("bvn");
  return (
    <section className="font-sans">
      <h1 className="font-semibold text-[24px] mid:text-[32px] pt-10">
        Enter your Bank Verification Number (BVN)
      </h1>
      <p className="text-[#566268] text-base">
        Your Bank Verification Number helps us to confirm your identity
      </p>
      <form onSubmit={handleSubmit(nextStep)}>
        <label className="flex flex-col gap-1 pt-12">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Please enter your BVN"
            maxLength={11}
            className="border border-[#D5D7DA] px-2 py-6 rounded-lg outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            {...register("bvn", {
              required: "BVN is required",
              maxLength: {
                value: 11,
                message: "BVN must be 11 digits",
              },
            })}
          />
          {errors.bvn && (
            <span className="text-red-500 text-sm">{errors.bvn.message}</span>
          )}
          <span className="text-[#407BFF] font-semibold text-sm">
            What is your BVN?
          </span>
        </label>
        <div className="pt-12">
          <h3 className="text-base text-[#171C27] font-semibold pb-4">
            Your BVN should:
          </h3>
          <div className="flex gap-1.5 items-center pb-2">
            <span
              className={`w-4 h-4 rounded-full border border-[#D5D7DA] ${/^\d+$/.test(bvnValue) ? "bg-[#12B76A]" : ""}`}
            >
              {/^\d+$/.test(bvnValue) ? (
                <TiTick size={13} className="text-white" />
              ) : (
                ""
              )}
            </span>
            <p
              className={` text-sm font-medium ${/^\d+$/.test(bvnValue) ? "text-[#12B76A]" : "text-[#566268]"}`}
            >
              Contain only numbers
            </p>
          </div>
          <div className="flex gap-1.5 items-center pb-2">
            <span
              className={`w-4 h-4 rounded-full border border-[#D5D7DA] ${/^\d+$/.test(bvnValue) ? "bg-[#12B76A]" : ""}`}
            >
              {/^\d+$/.test(bvnValue) ? (
                <TiTick size={13} className="text-white" />
              ) : (
                ""
              )}
            </span>
            <p
              className={` text-sm font-medium ${/^\d+$/.test(bvnValue) ? "text-[#12B76A]" : "text-[#566268]"}`}
            >
              Start with Valid Nigerian bank code
            </p>
          </div>
          <div className="flex gap-1.5 items-center pb-2">
            <span
              className={`w-4 h-4 rounded-full border border-[#D5D7DA] ${/^\d{11}$/.test(bvnValue) ? "bg-[#12B76A]" : ""}`}
            >
              {/^\d{11}$/.test(bvnValue) ? (
                <TiTick size={13} className="text-white" />
              ) : (
                ""
              )}
            </span>
            <p
              className={` text-sm font-medium ${/^\d{11}$/.test(bvnValue) ? "text-[#12B76A]" : "text-[#566268]"}`}
            >
              Be exactly 11 digits long
            </p>
          </div>
        </div>
        <div className="flex items-start mid:items-center gap-4 border border-[#D5D7DA] bg-[#FDFBFB] rounded-xl pl-5 pr-5 mid:pr-40 py-2.75 mt-12 mid:mt-22">
          <img src="/lock-keyhole(1).svg" alt="" />
          <div>
            <h5 className="text-[#171C27] text-lg font-semibold">
              Secure Verification
            </h5>
            <p className="text-[#566268] text-base">
              Your BVN is verified directly with the Central Bank of Nigeria’s
              Database and encryted with bank-grade security
            </p>
          </div>
        </div>
        <div className="pt-13 mid:pt-30 pb-12 flex flex-col items-center gap-7.5">
          <button
            type="submit"
            className="py-2 px-10 mid:px-30 xl:px-62 font-semibold text-[#FFFFFF] bg-[#407BFF] rounded-lg cursor-pointer font-inter"
          >
            Continue
          </button>
          <button className="cursor-pointer text-[#535862] font-semibold">
            I don't have BVN
          </button>
        </div>
      </form>
    </section>
  );
}
