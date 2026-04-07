import SignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signature() {
  const sigRef = useRef(null);
  const navigate = useNavigate();
  const [isSigned, setIsSigned] = useState(false);
    const [error, setError] = useState("");
    const [mode, setMode] = useState("draw")
    const [typedSignature, setTypedSignature] = useState("");
    const [uploadedFile, setUploadedFile] = useState(null);
    const fileRef = useState(null)
  const handleEnd = () => {
    setIsSigned(!sigRef.current.isEmpty());
  };
  const clear = () => {
    sigRef.current.clear();
    setIsSigned(false);
  };

 const save = () => {
  setError("");

  if (mode === "draw") {
    if (sigRef.current.isEmpty()) {
      setError("Please draw your signature");
      return;
    }
  }

  if (mode === "type") {
    if (!typedSignature.trim()) {
      setError("Please type your signature");
      return;
    }
  }

  if (mode === "upload") {
    if (!uploadedFile) {
      setError("Please upload your signature");
      return;
    }
  }

  navigate("/verification-successful");
};
  return (
    <section className="font-sans pt-15">
      <h2 className="text-[32px] font-semibold">Add your Signature</h2>
      <p className="text-base text-[#566268]">
        Your signature will be used for your bank transactions.
      </p>
      <div className="border border-[#D9D9D9] flex flex-col justify-center items-center py-10">
        <p className="text-[#343434]">Sign here</p>
              {mode === "draw" && (
               <SignatureCanvas
          ref={sigRef}
          penColor="blue"
          canvasProps={{
            className: "w-full h-60 rounded-lg",
          }}
          onEnd={handleEnd}
        />    
              )}
              {mode === "type" && (
                  <>
                   <input
      type="text"
      placeholder="Type your signature"
      value={typedSignature}
      onChange={(e) => setTypedSignature(e.target.value)}
      className=" px-4 py-2 w-full text-center rounded-lg outline-none"
    />
    <p
      className="pt-4 text-2xl"
      style={{ fontFamily: "cursive" }}
    >
      {typedSignature}
    </p>
                  </>)}
              {mode === "upload" && (
                  <>
                     <button
      onClick={() => fileRef.current.click()}
      className=" px-4 py-2 rounded-lg"
    >
      Upload Signature
    </button>  
                   <input
      ref={fileRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => setUploadedFile(e.target.files[0])}
    />
                      {uploadedFile && (
                          <img
                              src={URL.createObjectURL(uploadedFile)}
                              alt="signature"
                              className="w-40"
                          />)}
          </>
              )}
              
          </div>
          <p className="text-red-500">{ error}</p>
      <button
        onClick={clear}
        className="border border-[#D5D7DA] px-14.5 py-2.5 mt-6 font-inter font-semibold rounded-lg cursor-pointer"
      >
        Clear
      </button>
      <h4 className="pt-12 font-semibold text-[20px]">Other options</h4>
      <div className="flex flex-col mid:flex-row gap-5 mid:gap-20 items-center justify-between pt-3 " >
        <div className="border border-[#D9D9D9] rounded-[12px] py-3.25 pl-5.5 pr-20 cursor-pointer" onClick={()=>setMode("type")}>
          <h5 className="font-semibold text-[18px]">Type your signature</h5>
          <p className="text-base text-[#566268]">
            Use keyboard instead of drawing
          </p>
        </div>
        <div className="border border-[#D9D9D9] rounded-[12px] py-3.25 pl-5.5 pr-20 cursor-pointer" onClick={()=>setMode("upload")}>
          <h5 className="font-semibold text-[18px]">Upload your signature</h5>
          <p className="text-base text-[#566268]">
            Use an image file of your signature
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-22 pb-10" >
        <button
                  onClick={save}
                  
          className="bg-[#407BFF] border border-[#407BFF] rounded-md px-10 py-2 mid:px-50 cursor-pointer text-white"
        >
          Complete Verification
        </button>
      </div>
    </section>
  );
}
