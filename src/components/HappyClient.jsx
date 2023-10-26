import React from "react";
import Client from "../assets/ClientImage.jpeg"
import ClientGroup from "../assets/ClientGroup.png"

const HappyClient=()=>{
    return(
        <div className="ml-32 mb-28 mr-28 mt-32">
            <div className="place-self-center  flex-col mb-28">
                <p className="text-black text-center text-[40px] font-normal leading-normal">What our happy client say</p>
                <p className="text-gray-600 text-center text-base font-normal leading-[28.8px]">Several selected clients, who already believe in our service.</p>
            </div>
            <div className="flex justify-between">
                <img src={Client} className="w-96 h-96 rounded-[500px] rounded-tr-none shadow-md flex flex-shrink-0 "/>
                <div className="flex flex-col justify-center">
                    <p className="text-black text-24 font-normal leading-normal text-[24px]"> Mathew Paul</p>
                    <p className="text-gray-500 text-base font-normal leading-[25.6px] w-[412px]">Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
                </div>
                <img src={ClientGroup} className="w-[348px] h-[355px]"/>
            </div>
        </div>
    )
}

export default HappyClient