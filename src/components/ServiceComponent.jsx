import React from "react";

const ServiceComponent = (props) => {
    const {icon,name,details} = props
    return (
        <div className="h-[379px] w-[308px] rounded-[40px] flex flex-col border border-gray-300 bg-white p-5 place-items-center shadow-[0_10px_50px_0px_rgba(0,0,0,0.05)]">
            <img src={icon} className="w-[121px] h-[121px] justify-items-center rounded-3xl bg-blue-100 p-6" />
            <b className="mt-[31px] w-[167px] text-black text-center font-averta text-24 font-normal leading-normal text-[24px]">{name}</b>
            <p className="text-gray-600 mt-[27px] text-base font-averta text-center">{details}</p>
        </div>
    )
}
export default ServiceComponent