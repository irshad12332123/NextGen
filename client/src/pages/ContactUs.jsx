import React, { useState } from "react";
import { PiPhoneDisconnectThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { handleFeedback } from "@/api/api";
import FormError from "@/components/form-components/FormError";
function Input({
  type,
  value,
  handleChange,
  placeholder,
  name,
  required = true,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={handleChange}
      placeholder={placeholder}
      className={`focus:outline-0 outline-0 focus:border-[#ffffff] text-seasalt  py-3 px-4 rounded-md border border-[#80bfe437]  text-black w-full"
      } 
       md:text-md text-sm p-2`}
    />
  );
}

function ContactCard({ Icon, title, description }) {
  return (
    <div className={` w-full flex gap-4 items-center`}>
      <div className="p-2 bg-[#DFE9F4] rounded-md">
        <Icon className={`text-2xl text-blue-900 font-bold`} />
      </div>
      <div className="">
        <p className={` text-md text-seasalt font-bold`}>{title}</p>
        <p className={`text-muted  text-sm`}>{description}</p>
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("CLICKED THE SUBMIT");

    let newErrors = {};

    // Field-by-field validation
    if (formData.name.trim() === "") newErrors.name = "Please enter your name";
    if (formData.email.trim() === "")
      newErrors.email = "Please enter your email";
    else if (!formData.email.includes("@"))
      newErrors.email = "This email is invalid";
    if (formData.message.trim() === "")
      newErrors.message = "Please enter your message";

    // If any errors, update and stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Validation failed:", newErrors);
      return;
    }

    // Clear errors before request
    setErrors({});

    try {
      const res = await handleFeedback(formData);
      console.log("SERVER RESPONSE:", res);

      if (res?.success) {
        alert("Feedback submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(res?.message || "Something went wrong on server.");
      }
    } catch (error) {
      console.error("SERVER ERROR:", error);
      alert("Some error encountered, please try again!");
    }
  };

  return (
    <div className="min-h-screen w-full bg-raisin-black">
      <div className="w-full h-full ">
        <div className="flex py-30 flex-col justify-center items-center gap-3">
          <p className="text-5xl  text-seasalt ">
            Contact{" "}
            <span
              className="lg:text-9xl md:text-8xl text-5xl  text-wheat after:content-[''] after:absolute after:left-0 after:top-0 after:h-1 after:bg-white after:line"
              style={{ fontFamily: "Hurricane" }}
            >
              Us
            </span>
          </p>
          {/* <p className="text-sm text-muted md:w-[70%] text-center">
            A glimpse into the life at Nxt Gen Academy, Explore th campus,
            events, and the momrmnts that define us.
          </p> */}
        </div>
        <div className="flex md:flex-row flex-col gap-5 h-full w-full lg:px-50 md:px-15 px-5 ">
          <div className="md:w-[50%] w-full pb-10 ">
            <p className="text-seasalt mt-3 w-[90%] text-sm md:text-[1rem]">
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
                <p className="text-seasalt font-bold">Our Location</p>
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
          <div className="md:w-[50%] w-full border border-[#80bfe437] rounded-md md:p-8 p-2  space-y-8">
            <p className="md:text-2xl text-xl font-bold text-seasalt">
              Send us a message
            </p>
            <form
              action=""
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <span className="mb-1 md:text-[1rem] text-seasalt text-sm font-medium">
                  Name
                </span>
                <Input
                  type={"text"}
                  name="name"
                  handleChange={handleChange}
                  value={formData.name}
                  required
                />
              </label>

              {errors?.name ? <FormError title={errors?.name} /> : null}

              <label className="flex flex-col">
                <span className="mb-1 md:text-[1rem] text-sm  text-seasalt font-medium">
                  Email
                </span>
                <Input
                  type={"text"}
                  name={"email"}
                  handleChange={handleChange}
                  value={formData.email}
                  required
                />
              </label>

              {errors?.email ? <FormError title={errors?.email} /> : null}

              <label className="flex flex-col">
                <span className="mb-1 md:text-[1rem] text-sm    text-seasalt font-medium">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="resize-none text-seasalt border border-[#80bfe437] ] rounded-md"
                  required
                ></textarea>
              </label>

              {errors?.message ? <FormError title={errors?.message} /> : null}

              <button
                type="submit"
                className="bg-blue-600 text-white  cursor-pointer font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
