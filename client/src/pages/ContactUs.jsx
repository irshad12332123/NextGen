import React, { useState } from "react";
import ImageCard from "../components/cards/ImageCard";
import { PiPhoneDisconnectThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
function Input({
  type,
  value,
  setValue,
  placeholder,
  primary = true,
  name,
  required = true,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={`focus:outline-0 outline-0  py-3 px-4 rounded-md border border-[#DFE9F4] text-black w-full"
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
    <div className={` w-full flex gap-4 items-center`}>
      <div className="p-2 bg-[#DFE9F4] rounded-md">
        <Icon className={`text-2xl text-blue-900 font-bold`} />
      </div>
      <div className="">
        <p className={` text-md font-bold`}>{title}</p>
        <p className={`text-[#868C90] text-sm`}>{description}</p>
      </div>
    </div>
  );
}
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-full">
      <ImageCard title="Contact Us" buttonRequired={false} />
      <div className="flex gap-5 h-full w-full px-50 my-10">
        <div className="w-[50%] pb-10 ">
          <p className="text-4xl font-bold">Contact Us</p>
          <p className="text-[#868C90] mt-3 w-[90%]">
            We're are here to help. Reach out with any questions or inquiies,
            and our team will get back to you as soon as possible,
          </p>
          <div className="mt-5 space-y-6 ">
            <div className=" border-b-1 space-y-6 border-blue-200 pb-10">
              <ContactCard
                Icon={PiPhoneDisconnectThin}
                title={"Phone"}
                description={"Hello"}
              />
              <ContactCard
                Icon={FaLocationArrow}
                title={"Address"}
                description={"Kharar, Mohali, Punjab 140103"}
              />
              <ContactCard
                Icon={CiMail}
                title={"Mail"}
                description={"alidanish5138@gmail.com"}
              />
            </div>
            <div className="space-y-5">
              <p>Our Location</p>
            </div>
            <div className="w-full md:h-67 ">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.774819049241!2d76.61663687634815!3d30.780898874561075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffa9485c539a5%3A0x7e32a159650281bc!2sRayat%20Bahra%20University!5e0!3m2!1sen!2sin!4v1760452466866!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-[50%] border border-[#DFE9F4] rounded-md p-8 space-y-8">
          <p className="text-2xl font-bold">Send us a message</p>
          <form action="" className="flex flex-col gap-5">
            <label className="flex flex-col">
              <span className="mb-1 font-medium">Name</span>
              <Input
                type={"text"}
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1  font-medium">Email</span>
              <Input
                type={"text"}
                name={"email"}
                onChange={handleChange}
                value={formData.email}
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1  font-medium">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="resize-none bg-white border border-[#DFE9F4] rounded-md"
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
