import { useState, useRef } from "react";
import {toast} from 'react-toastify'
import { TiTick } from "react-icons/ti";
export default function Identity({ nextStep }) {
  const verification = [
    { type: "radio", name: "Driver’s License", img: "/image 2.svg" },
    { type: "radio", name: "National ID Card", img: "/image 3.svg" },
    { type: "radio", name: "Voter's Card", img: "/image 4.svg" },
    { type: "radio", name: "International Passport", img: "/image 5.svg" },
  ];
  const [selected, setSelected] = useState(null);
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const handleContinue = () => {
    if (!selected) {
      toast.error("Please select an ID type first")
      return;
    }  
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      toast.success("ID Uploaded Successfully!")
      nextStep()
    };

  }
  return (
    <section className="font-sans">
      <h2 className="text-[24px] mid:text-[32px] pt-15 font-semibold">
        Select your ID Card
      </h2>
      <p className="text-[#566268] text-base">
        Choose one government-issued ID that you have available. All options are
        equally secure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
        {verification.map((v, index) => (
          <div
            className="flex flex-col gap-3.5 p-6 border border-[#CED7D8] rounded-lg"
            key={index}
            onClick={() => setSelected(v.name)}
          >
            <div className="flex gap-2">
              <input
                type={v.type}
                checked={selected === v.name}
                readOnly
                className="hidden"
              />
              <div
                className={`flex items-center justify-center w-6 h-6 border rounded-full ${selected === v.name ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"}`}
              >
                {selected === v.name && <img src="/Icon (8).svg" />}
              </div>
              <p className="text-[20px] font-semibold">{v.name}</p>
            </div>
            <img src={v.img} alt="" className="pl-4" />
          </div>
        ))}
      </div>
      {uploadedFile && (
        <p>{ uploadedFile.name}</p>
      )}
      <div className="flex items-center justify-center pt-18 pb-8">
        <button
          className="bg-[#407BFF] text-[#FFFFFF] border px-10 mid:px-20 py-3  rounded-lg font-semibold cursor-pointer"
          onClick={handleContinue}
        >
          Continue with {selected || "ID"} License
        </button>
      </div>
       <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      /> 
    </section>
  );
}
