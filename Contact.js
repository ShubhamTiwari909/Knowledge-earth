import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Footer from './Footer'
import "./Contact.css";

const Contact = () => {
  const [display, setDiplay] = useState(false);
  return (
    <div>
      <div className="bg-image"></div>
      <div className="bg-text">
        <h2 className="text-2xl py-3">I am Shubham Tiwari</h2>
        <h1 className="text-4xl py-3 postTitle">WEB DEVELOPER at DevRonnins</h1>

        <div
          style={{ display: display ? "flex" : "none" }}
          className="flex justify-center align-middle my-4 p-2"
        >
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a className="text-xl linkText" href="https://wa.me/+91 8266943516">
              <AiOutlineWhatsApp color="#ffcec5" className="contactIcons" />
            </a>
          </p>
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a
              className="text-xl linkText"
              href="mailto:shubhmtiwri00@gmail.com"
            >
              <MdOutgoingMail color="#ffcec5" className="contactIcons" />
            </a>
          </p>
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a
              className="text-xl linkText"
              href="https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin color="#ffcec5" className="contactIcons" />
            </a>
          </p>
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a
              className="text-xl linkText"
              href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram color="#ffcec5" className="contactIcons" />
            </a>
          </p>
        </div>
        <button
          onClick={() => setDiplay(!display)}
          className="ring-2 ring-red-200 bg-none text-slate-200 rounded-md px-4 py-2 my-4"
        >
          Contacts
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
