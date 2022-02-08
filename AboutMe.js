import React from "react";
import Myself from './Aboutmages/Myself.png'
import Skills from './Aboutmages/Skills.png'
import Education from './Aboutmages/Educations.png'
import Footer from './Footer'

const AboutMe = () => {
    return (
        <div>
            <div className="flex flex-col justify-center align-middle bg-slate-800 pb-20">
                <img src={Myself} className="mb-5 ring-8 ring-blue-200" />
                <img src={Skills} className="my-5 ring-8 ring-blue-200" />
                <img src={Education} className="my-5 ring-8 ring-blue-200" />
            </div>
            <Footer />
        </div>

    );
};

export default AboutMe;