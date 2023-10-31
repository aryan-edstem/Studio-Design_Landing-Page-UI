import React from "react";
import Group from '../assets/Group.jpeg'
import PlayButton from '../assets/PlayButton.svg'
import Rectangle4 from '../assets/Rectangle4.svg'
import Ellipse5 from '../assets/Ellipse5.svg' 

const Great= () => {
    return(
        <div className="flex flex-row ml-32 mt-36 justify-center mr-32 shadow-[10_20px_50px_0px_rgba(0,0,0,0.15)]">
            <img src={Group} className="w-[550px] h-[372px] rounded-[32px] shadow-[10_20px_50px_0px_rgba(0,0,0,0.15)] static relative z-10"/>
            <button><img src={PlayButton} className="relative -left-80 top-0 z-20"/></button>
            <img src={Ellipse5} className="relative -left-40 -bottom-44 z-0"/>
            <div className="flex-col justify-center self-center relative "> 
                <img src={Rectangle4} className="w-[178px] h-[178px] absolute -top-.5 -left-10 overflow-hidden z-10"/>
                <p className="w-[468px] text-black text-[40px] font-normal font-averta leading-normal block relative z-10">Great Digital Product Agency since 2016 </p>
                <p className="w-[532px] text-gray-600 text-base font-normal font-averta leading-7 mt-10 block relative z-10">Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
            </div>
        </div>
    )
}

export default Great