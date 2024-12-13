"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Button } from "@/components";

type Form = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // emailjs.sendForm("service_99t306t", "template_iojnbh5", formData, {publicKey: "73YB3ttjRcQpM-3_2"})

    emailjs
      .send(
        "service_99t306t", // service id
        "template_iojnbh5", // template id
        formData,
        "73YB3ttjRcQpM-3_2" // public key
      )
      .then(
        (response) => {
          setMessage("Email sent successfully");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          setMessage("Email not sent!");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    //  {/* contact form */}
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <form onSubmit={handleSubmit}>
        <h2 className=" text-lg mb-1 font-semibold text-primary title-font">
          Send Us a Message
        </h2>
        <p className="leading-relaxed mb-5">
          Please fill this form if you have any queries or a message for us.
        </p>
        <div className="relative mb-4">
          <Input
            label={"Full Name"}
            type={"text"}
            id={"name"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
            placeHolder="Enter your name"
          />
        </div>
        <div className="relative mb-4">
          <Input
            label={"Email"}
            type={"text"}
            id={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            placeHolder="Enter your email"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <Button
          type="submit"
          className=" border-2 border-primary focus:outline-none hover:bg-primary/90 rounded text-lg"
        >
          Send Message
        </Button>
        <p className="text-xs text-white text-opacity-90 mt-3">{message}</p>
        <p className="text-xs text-white text-opacity-90 mt-3">
          Please check our privacy policy for any issues.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
