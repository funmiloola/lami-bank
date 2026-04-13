import { useParams } from "react-router-dom";
import BVNSection from "../../components/BVN.jsx";
import Stepper from "../../components/Stepper.jsx";
import { useState } from "react";
import Identity from "../../components/Identity.jsx";
import Address from "../../components/Address.jsx";
import Liveness from "../../components/Liveness.jsx";
import LivenessDetails from "../../components/LivenessDetails.jsx";
import Signature from "../../components/Signature.jsx";
export default function BVN() {
  const details = [
    {
      id: 1,
      image: "/ChatGPT Image May 11, 2025, 04_30_57 AM 1.svg",
      desc: "Your data is encrypted and stored securely.",
      info: "Only authorized personnel can access your information",
      icon: "/lock-keyhole(1).svg",
    },
    {
      id: 2,
      image: "/ChatGPT Image May 11, 2025, 03_57_55 AM 1.svg",
      desc: "Your data is encrypted and stored securely.",
      info: "Only authorizec personnel can access your information",
      icon: "/lock-keyhole(1).svg",
    },
    {
      id: 3,
      image: "/ChatGPT Image May 11, 2025, 04_08_45 AM 1 (1).svg",
      desc: "Your data is encrypted and stored securely.",
      info: "Only authorizec personnel can access your information",
      icon: "/lock-keyhole(1).svg",
    },
    {
      id: 5,
      image: "/ChatGPT Image May 11, 2025, 04_23_10 AM 1.svg",
      desc: "Your data is encrypted and stored securely.",
      info: "Only authorizec personnel can access your information",
      icon: "/lock-keyhole(1).svg",
    },
  ];
  const stepperDetails = [
    { name: "BVN", path: "bvn", Component: BVNSection },
    { name: "ID UPLOAD", path: "id-upload", Component: Identity },
    { name: "PROOF OF ADDRESS", path: "address", Component: Address },
    { name: "LIVENESS CHECK", path: "live-check", Component: Liveness },
    { name: "SIGNATURE CAPTURE", path: "signature", Component: Signature },
  ];
  const { step } = useParams();
  const currentStepIndex = stepperDetails.findIndex((s) => s.path === step);
  const safeIndex = currentStepIndex === -1 ? 0 : currentStepIndex;
  const currentStep = currentStepIndex + 1;
  return (
    <section
      className={`flex justify-between font-sans w-full  ${currentStep === 4 ? "h-full" : "h-screen"}`}
    >
      <div className="w-full mid:w-3/5 px-7 mid:px-16 xl:px-23 pt-15 overflow-y-auto">
        <Stepper
          stepsConfig={stepperDetails}
          safeIndex={safeIndex}
          currentStep={currentStep}
        />
      </div>

      <div className="hidden mid:block w-2/5  min-h-screen  bg-gradient-to-b from-[rgba(184,225,255,1)] to-[rgba(64,123,255,1)]">
        <h1 className="flex justify-end items-center gap-2 pr-12.5 pt-17">
          <img src="/Logo (1).svg" alt="logo" />
          <span className="font-semibold text-xl font-tiempos">Lami Bank</span>
        </h1>
        {currentStep === 4 ? (
          <div>
            <LivenessDetails />
          </div>
        ) : (
          <div>
            {details
              .filter((d) => d.id === currentStep)
              .map((d, index) => (
                <div
                  key={index}
                  className="flex flex-col  justify-between items-center pt-20 pb-6"
                >
                  <img src={d.image} alt="" />
                  <div className="flex gap-2.5 bg-white rounded-xl py-4.25 px-6">
                    <img src={d.icon} alt="" />
                    <div>
                      <h5 className="text-[18px] font-semibold text-[#407BFF]">
                        {d.desc}
                      </h5>
                      <p className="text-base text-[#407BFF]">{d.info}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
