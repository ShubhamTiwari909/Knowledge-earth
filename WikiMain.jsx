import React from "react";
import Wikipedia from "./Wikipedia";
import { Link, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { SiInformatica } from "react-icons/si";

const Wikimain = () => {
  const welcomeContainer = {
    background:
      'url("https://images.immediate.co.uk/production/volatile/sites/4/2021/08/GettyImages-1215288361-Hero-a892ab9.jpg?quality=90&resize=768,574")',
    backgroundSize: "cover",
  };
  return (
    <div>
      <div
        className="flex justify-around lg:flex-row md:flex-row py-20 lg:py-36 md:py-36 sm:py-20 mnavbar"
        style={welcomeContainer}
      >
        <div className="flex justify-between lg:flex-row md:flex-row space-x-8">
          <div>
            <h1 className="flex space-x-3 text-center font-sans font-semibold my-4 text-slate-100 lg:text-5xl md:text-4xl headingLogo">
              <Link to="/">
                <h1 className="lg:text-slate-200">Knowledge Earth</h1>
              </Link>
              <SiInformatica color="magenta" />
            </h1>
          </div>
          <div className="flex space-x-5 lg:space-x-10 my-4 ml-2">
            <Link
              to="/about"
              className="text-slate-100 text-xs lg:text-4xl md:text-2xl lg:ml-10 ring-2 lg:ring-4 ring-red-400 px-3 py-2 rounded-md headingLink"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-100 text-xs lg:text-4xl md:text-2xl ring-2 lg:ring-4 ring-red-400 px-3 py-2 rounded-md headingLink"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Wikipedia />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Wikimain;
