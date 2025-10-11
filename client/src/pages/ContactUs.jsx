import React, { useState } from "react";
import ImageCard from "../components/cards/ImageCard";
import { PiPhoneDisconnectThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
function Input({ type, value, setValue, placeholder, primary = true }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={`focus:outline-0 outline-0 rounded-full py-3 px-4 ${
        primary ? "bg-white" : "bg-[#1e293b94] text-black w-full"
      } 
       text-md p-2`}
    />
  );
}

function ContactCard({
  Icon,
  title,
  description,
  backgroud = false,
  lightBackgroud = false,
}) {
  return (
    <div
      className={`space-y-5  ${
        backgroud
          ? lightBackgroud
            ? "bg-blue-300"
            : "bg-blue-500"
          : "bg-white  shadow-2xl"
      } p-9 rounded-3xl w-full`}
    >
      <div className="flex gap-4 items-center">
        <Icon
          className={`text-5xl ${backgroud ? "text-white" : "text-black"}`}
        />
        <p className={` text-xl ${backgroud ? "text-white" : "text-black"}`}>
          {title}
        </p>
      </div>
      <p className={`${backgroud ? "text-white" : "text-black"}`}>
        {description}
      </p>
    </div>
  );
}
function ContactUs() {
  const [email, setEmail] = useState("");
  const [emailNewsletter, setEmailNewletter] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="w-full h-full">
      <ImageCard title="Contact Us" buttonRequired={false} />
      <div className="w-full h-full mt-20 px-[20%]">
        <div className="flex gap-15 justify-between">
          <form action="" className="space-y-3 w-full my-10">
            <div className="flex gap-2">
              <Input
                placeholder={"Email"}
                value={email}
                setValue={setEmail}
                primary={false}
                type={"email"}
              />
              <Input
                placeholder={"Phone"}
                value={phone}
                primary={false}
                setValue={setPhone}
                type={"number"}
              />
            </div>
            <Input
              placeholder={"Name"}
              value={name}
              primary={false}
              setValue={setName}
              type={"text"}
            />
            <textarea
              className="focus:outline-0 outline-0 rounded-2xl p-5 w-full  md:h-52 bg-[#1e293b94]"
              placeholder="Your Query?"
            ></textarea>
            <button className="px-8 py-4 bg-[#1e293b] w-1/3 text-white rounded-full ">
              Submit
            </button>
          </form>
          {/* NewsLatter Card */}
          <div className="flex flex-col gap-5 bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-7 w-full h-full rounded-4xl">
            <p className="text-white font-bold">Our Newsletter</p>
            <p className=" text-sm max-w-[15rem] text-white">
              Subscribe to our NewsLatter to get the latest updates firstly./
            </p>
            <Input
              placeholder={"Email"}
              value={emailNewsletter}
              setValue={setEmailNewletter}
              type={"email"}
            />
            <button className="py-3 px-5 bg-black text-white rounded-full ">
              Subscribe
            </button>
          </div>
        </div>
        {/* contsct Info */}
        <div className="flex gap-5 my-10 w-full h-full ">
          <ContactCard
            Icon={PiPhoneDisconnectThin}
            title={"+91 9845XXXXXX"}
            description={"available 24/7"}
            backgroud
          />

          <ContactCard
            Icon={CiMail}
            title={"example@gmail.com"}
            description={"available 24/7"}
            backgroud
            lightBackgroud
          />

          <ContactCard
            Icon={FaLocationArrow}
            title={"khara, Mohali"}
            description={"available 24/7"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
