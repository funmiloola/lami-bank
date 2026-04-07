import { useState, useRef } from "react";

export default function Address({ nextStep }) {
  const options = [
    "Utility Bill",
    "Credit Card Statement",
    "Mortgage",
    "Lease Statement",
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Select Document Type");
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");
  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
      alert("Only images or PDF allowed");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Max 5MB");
      return;
    }
    setFile(file);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };
  const handleContinue = () => {
    if (!file) {
      setError("Please Add a Document For Verification");
      return;
    }
    nextStep();
  };
  return (
    <section className="pt-15 font-sans">
      <h2 className="text-[24px] mid:text-[32px] font-semibold">Verify your address</h2>
      <p className="text-base text-[#566268]">
        Upload a document that shows your residential address
      </p>
      <div className=" relative w-full pt-12" onClick={() => setOpen(!open)}>
        <div className="border border-[#D5D7DA] rounded-md  py-2.5 px-6.75 flex justify-between items-center">
          <p className="text-base font-medium">{value}</p>
          <img src="/Cheron-down.svg" alt="arrow-down" />
        </div>
        {open && (
          <ul className="absolute w-full bg-white px-6.75 border border-white mt-1 rounded-lg shadow flex flex-col gap-1">
            {options.map((opt, index) => (
              <li
                className="cursor-pointer"
                key={index}
                onClick={() => {
                  setOpen(false);
                  setValue(opt);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border border-[#F4840C] bg-[#FFF5EA] rounded-xl flex gap-4 items-start mid:items-center py-2 px-5.5 mt-9">
        <img
          src="/Icons (1).svg"
          alt=""
          className="border rounded-full bg-[#F4840C] p-0.25 border-[#F4840C]"
        />
        <div>
          <h3>Document must be less than 3 months old</h3>
          <p>Make sure your name and current address are clearly visible</p>
        </div>
      </div>
      <div className="pt-9">
        <div
          className={`flex flex-col items-center justify-center border border-dashed  rounded-[10px] py-4.5 ${dragging ? "border-blue-500 bg-blue-50" : "border-[#00000040]"}`}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setDragging(true)}
          onDragLeave={() => setDragging(false)}
        >
          <img src="/feather_upload-cloud.svg" alt="" className="pb-6" />
          <p className="pb-3">Select a file or drag and drop here</p>
          <p className="text-[#00000066] pb-6 text-xs mid:text-base">
            JPG, PNG or PDF, file size no more than 10MB
          </p>
          <button
            className="py-3 px-4 text-[#407BFF] border border-[#407BFFB2] rounded-[5px] font-medium cursor-pointer"
            onClick={() => inputRef.current.click()}
          >
            SELECT FILE
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </div>
        <p className="text-red-500">{error}</p>
        <div>
          {file && (
            <div className="pt-8">
              <div className="pb-2">
                <h4>File added</h4>
                <div className="flex  gap-3 items-center pt-3">
                  <div className="flex justify-between gap-70 items-center border border-[#407BFF] rounded-lg py-2.25 px-2.5">
                    <span>{file.name}</span>
                    <img
                      src="/Delete.svg"
                      alt="delete-icon"
                      className="cursor-pointer"
                      onClick={() => setFile(null)}
                    />
                  </div>

                  <p
                    className="text-[#407BFF] cursor-pointer text-xs underline"
                    onClick={() => setShowPreview(!showPreview)}
                  >
                    Preview
                  </p>
                </div>
              </div>
              {showPreview && file.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-40 mt-2 rounded-lg"
                />
              )}
            </div>
          )}
        </div>
        <div className="flex font-semibold gap-4 items-center py-4.75 pl-5.25 border border-[#D9D9D9] rounded-lg mt-8">
          <img src="/camera.svg" alt="" />
          <p>Take a photo instead</p>
        </div>
        <div className="flex justify-center items-center pt-22 pb-10">
          <button
            onClick={handleContinue}
            className="border border-[#407BFF] bg-[#407BFF] text-white py-2.5 px-15 mid:px-55 rounded-lg font-semibold cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
