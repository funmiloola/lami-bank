import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Stepper({ stepsConfig,safeIndex,currentStep }) {
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate()
  const ActiveComponent = stepsConfig[safeIndex].Component;
    const nextStep = () => {
      const next = stepsConfig[safeIndex + 1] 
    if (next) {
      navigate(`/verification/${next.path}`)
    } else {
      setComplete(true);
    }
  };

  return (
    <section className="">
      <div className="flex  items-center justify-between">
        <div className="flex gap-3.5">
          <img src="/chevron-down.svg" alt="chevron" />
          <p className="text-base text-[#407BFF] font-semibold">Back</p>
        </div>
        <div className="text-base text-[#407BFF] font-semibold">
          Step {currentStep} of {stepsConfig.length}
        </div>
      </div>
      <div className="flex w-full justify-between items-center pt-9">
        {stepsConfig.map((step, index) => {
          const isActive = currentStep === index + 1 ;
          const isComplete = index + 1 < currentStep  || complete;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center w-45"
            >
              {index !== 0 && (
                <div
                  className={`absolute h-[1px] w-full right-[44%] top-1/5 -translate-y-1/2 ${
                    isComplete ? "bg-[#407BFF]" : "bg-[#C6C6C6]"
                  }`}
                />
              )}
              <div
                className={`w-3 h-3 md:w-6 md:h-6 flex items-center  border  justify-center z-10 rounded-full  ${
                  isComplete
                    ? "bg-[#407BFF] border-[#407BFF]"
                    : isActive
                      ? "border-[#407BFF] "
                      : "bg-white border-[#C6C6C6] "
                }`}
              >
                {index + 1 < currentStep || complete ? (
                  <img src="/Vector (17).svg"/>
                ) : (
                  <div
                    className={`w-1 h-1 rounded-full ${isActive ? "bg-[#407BFF]" : "bg-white"}`}
                  ></div>
                )}
              </div>
              <p className="pt-2 text-[6px] md:text-xs text-[#566268] font-medium">{step.name}</p>
            </div>
          );
        })}
      </div>

      <ActiveComponent
        nextStep={nextStep}
        isLastStep={currentStep === stepsConfig.length}
      />
    </section>
  );
}
