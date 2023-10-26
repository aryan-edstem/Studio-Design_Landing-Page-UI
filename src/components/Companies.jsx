import React from "react";
import google from "../assets/Google logo.svg"
import airbnb from "../assets/Airbnb logo.svg"
import ubereats from "../assets/Uber Eats logo.svg"
import amazon from "../assets/Amazon logo.svg"

const Companies = () => {
    return(
    <div>
        <div className="flex flex-col mt-16 mr-32 ml-32">
            <p className="text-black text-[40px] font-normal leading-normal">Our Client</p>
            <div className="flex flex-row justify-between">
            <p className="w-80 text-gray-600 text-base font-normal leading-7">Several selected clients, who already believe in our service.</p>
            <img src={google} />
            <img src={airbnb} />
            <img src={ubereats} />
            <img src={amazon} />
            </div>
        </div>
    </div> 
    )
}

export default Companies