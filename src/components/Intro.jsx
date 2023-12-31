import React from "react";
import studio from '../assets/studio.png'
import ellipse from '../assets/Ellipse.svg'
import rectangle from '../assets/Rectangle.svg'
import dot from '../assets/Dot.svg'

const Intro = () => {
    return(
        <div className='flex flex-row justify-between mt-10'>
          <div className='flex flex-col ml-28'>
            <p className='mt-40 text-black text-[40px] font-averta font-normal leading-normal'>A Digital Product Agency</p>
            <p className='w-[471px] mt-10 text-gray-500 font-averta text-base font-normal leading-6'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
            <button className='inline-flex w-52 p-5 mt-8 justify-center items-center space-x-10 rounded-full bg-[#2639ED] p-5 text-white font-averta text-base font-normal leading-normal tracking-wide relative z-10'>Contact Now</button>
            <img src={dot} className="w-48 absolute bottom-36 left-20 z-0"/>
            <img src={dot} className="w-48 absolute bottom-36 left-72 z-0"/>      
          </div>
        <div className=" relative">
          <img src={ellipse} className="w-[129px] h-[129px] absolute top-0 -left-16 overflow-hidden z-0" />
          <img src={rectangle} className="w-[178px] h-[178px] absolute bottom-[-89px] right-32 overflow-hidden z-0" />
          <img src={studio} className='w-[754px] h-[512px] rounded-bl-[200px] flex flex-shrink-0 block relative z-10'/>
        </div>
      </div> 
    )
}

export default Intro