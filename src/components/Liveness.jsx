import  { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import {toast} from 'react-toastify'
const Liveness = ({ nextStep }) => {
  const videoRef = useRef();
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);


useEffect(() => {
  const loadModelsAndStart = async () => {
    try {
      const MODEL_URL = '/model';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log("Camera stream attached!");
      }
    } catch (err) {
      console.error("Initialization failed:", err);
      toast.error("Please ensure your camera is enabled and you are using HTTPS.");
    }
  };
  
  loadModelsAndStart();
}, []);

  const handleDetection = async () => {
    if (!videoRef.current) return;

    const detections = await faceapi.detectSingleFace(
      videoRef.current,
      new faceapi.TinyFaceDetectorOptions()
    ).withFaceLandmarks();

    if (detections) {
      const landmarks = detections.landmarks;
      const nose = landmarks.getNose();
      const jawOutline = landmarks.getJawOutline();

      const noseX = nose[3].x;
      const leftJawX = jawOutline[0].x;
      const rightJawX = jawOutline[16].x;
      
      const faceCenter = (leftJawX + rightJawX) / 2;
      const offset = noseX - faceCenter;

      if (currentStep === 1 && Math.abs(offset) < 10) {
        setCurrentStep(2);
      } else if (currentStep === 2 && offset > 25) {
        toast.success("Liveness Verified!");
        nextStep(); 
      }
    }
  };

  useEffect(() => {
    let interval;
    if (modelsLoaded) {
      interval = setInterval(handleDetection, 200);
    }
    return () => clearInterval(interval);
  }, [modelsLoaded, currentStep]);

  return (
    <section className="pt-15 font-sans">
      <h2 className="text-[24px] mid:text-[32px] font-semibold">Quick Liveness Check</h2>
      <p className="text-[#566268] text-base pb-6">We need to confirm your presence for additional security</p>
      
      <div className="relative border bg-[#1F2937] border-[#1F2937] flex flex-col justify-center items-center py-10 gap-12 overflow-hidden">
        <h4 className="text-white text-center mid:text-left text-xs mid:text-base z-10">
          {modelsLoaded ? "Position your face in the oval" : "Initialising Camera..."}
        </h4>
        
        <div className="relative w-[280px] h-[280px] flex justify-center items-center">
            <video 
              ref={videoRef} 
              autoPlay muted 
              className="absolute object-cover w-full h-full rounded-full border-4 border-[#407BFF]" 
            />
            
          {modelsLoaded ? '' : (<img src="/Facial ID.svg" className="absolute z-20 pointer-events-none w-full" alt="overlay" />)}  
        </div>
      </div>

      <div className="my-6 flex flex-col gap-7 justify-center border border-[#E0E0E0] rounded-md py-3 mid:py-6 px-3 mid:px-6.5">
        
        <div className={`flex gap-2.5 mid:gap-5 items-center ${currentStep === 1 ? 'opacity-100' : 'opacity-40'}`}>
          <span className={`rounded-full py-1.5 px-2.5 font-semibold ${currentStep === 1 ? 'bg-[#E8F1FA] text-[#407BFF]' : 'bg-gray-200 text-gray-500'}`}>1</span>
          <span className="text-base mid:text-xl font-semibold">Look Straight into the Camera</span>
        </div>
        
      
        <div className={`flex gap-2.5 mid:gap-5 items-center ${currentStep === 2 ? 'opacity-100' : 'opacity-40'}`}>
          <span className={`rounded-full py-1.5 px-2.5 font-semibold ${currentStep === 2 ? 'bg-[#E8F1FA] text-[#407BFF]' : 'bg-gray-200 text-gray-500'}`}>2</span>
          <span className="text-base mid:text-xl font-semibold">Turn your Head Slowly to the Right</span>
        </div>
      </div>

      
    </section>
  );
};

export default Liveness;