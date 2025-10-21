import React from "react";
import CustomBtn from "../CustomBtn";

function ImageCard({
  buttonRequired = true,
  title = "Enroll for the best Online Courses",
  imageRequired = true,
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCOCKGeJNQ0akV44Jri-U-_JuuBM_fedkplCRlYjkDacei3LmmGo1VXMIMZPWoAP42Egy5bVj3w5eg6DClHKhFeWmM0Z9I-Ivr-cWDthe0s8IpWDrd8Ka6z7kjAvorrv3Io4vSdmjM01qziE9axBju3YG6_Rehp8FvQua9An5bWDvI7fLOXrA60mA3ZpRD2T00g9aanfv5iBnHvzf4PYf9jSzJDNsM3F3puaDyz1VGcB_53amKi40RzWiWR0P0YGniTYOXrI1XBShA",
}) {
  console.log(imageUrl);
  return (
    <div className="relative w-full h-70 md:h-120 flex items-center justify-center overflow-hidden">
      {imageRequired ? (
        <img
          src={imageUrl}
          alt="image-card"
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-tl from-[#1c3334]  to-[#142e2b]"></div>
      )}

      <div className="absolute z-1 flex flex-col items-center justify-center gap-5">
        <p className="max-w-6xl md:text-3xl  text-xl text-white font-bold text-center">
          {title}
        </p>
        {buttonRequired && (
          <CustomBtn customStyle={"border-1 border-white text-white"} />
        )}
      </div>
      <div className="absolute top-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
}

export default ImageCard;
