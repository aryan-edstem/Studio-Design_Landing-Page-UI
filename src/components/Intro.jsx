import React from "react";
import studio from '../assets/studio.png'

const Intro = () => {
    return(
        <div className='flex flex-row justify-between mt-10'>
        <div className='flex flex-col ml-28'>
          <p className='mt-40 text-black text-[40px] font-normal leading-normal'>A Digital Product Agency</p>
          <p className='w-[471px] mt-10 text-gray-500 text-base font-normal leading-6'>Leadin
          .g digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
          <button className='inline-flex w-52 p-5 mt-8 justify-center items-center space-x-10 rounded-full bg-blue-500 p-5 text-white font-averta text-base font-normal leading-normal tracking-wide'>Contact Now</button>    
        </div>
        <div>
          <img src={studio} className='w-[754px] h-[512px] rounded-bl-[200px] flex flex-shrink-0 '/>
        </div>
      </div> 
    )
}

export default Intro