import React from "react";
import rectangle5 from "../assets/Rectangle5.svg"
import rectangle6 from "../assets/Rectangle6.svg"

const Newsletter =() => {
    return (
        <div className="flex mx-auto h-[292px] w-[1300px] justify-around bg-[#F4F9FF] rounded-[75px] relative z-20">
            <img src={rectangle6} className="h-[178px] absolute -bottom-10 -left-10 -z-20" />
            <img src={rectangle5} className="h-[292px] absolute top-0 right-0 z-30" />
            <div className="flex flex-col place-content-center z-30">
                <p className="text-black font-normal leading-normal text-[40px]">Subscribe Newsletter</p>
                <p className=" text-gray-500 text-base font-normal leading-6">I will update good news and promotion service not spam</p>
            </div>
            <div className="flex self-center justify-between border-black bg-white rounded-[60px] p-2 h-20 w-[479px] z-50 shadow-[10px_20px_50px_0px_rgba(0,0,0,0.15)]">
                <input placeholder="Enter your email address.." className=" ml-10"  />
                <button className='inline-flex w-52  justify-center items-center space-x-10 rounded-full  bg-[#2639ED]  text-white text-base font-normal leading-normal tracking-wide'>Contact Now</button>

            </div>
        </div>
    )
}

export default Newsletter