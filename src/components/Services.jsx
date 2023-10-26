import React from "react";
import BoxSearch from '../assets/box-search.svg';
import ServiceComponent from "./ServiceComponent";
import SquareChart from '../assets/chart-square.svg';
import Code1 from '../assets/code-1.svg';
import EmptyWallet from '../assets/empty-wallet.svg';
import rectangle2 from '../assets/Rectangle2.svg'
import rectangle3 from '../assets/Rectangle3.svg'
import ellipse2 from '../assets/Ellipse2.svg'

const Services =() => {
    return(
        <div className="flex flex-row mt-28 ml-32 gap-10 relative justify-between">
            <div className="flex flex-col w-[358px] h-[98px] place-self-center relative">
                <img src={rectangle2} className="w-[178px] h-[178px] absolute -top-14 -left-12 overflow-hidden z-10" />
                <p className="text-black text-[40px] font-normal leading-normal block relative z-10">How can we help your Business ?</p>
                <p className="w-96 text-gray-600 text-base font-normal leading-7 z-10">We build readymade websites, mobile applications, and elaborate online business services.</p>
            </div>
                <img src={rectangle3} className="w-[1047px] h-[619px]  absolute right-20 top-32 overflow-hidden z-10"/>
                <div className="flex flex-col  gap-y-8 z-20 absolute right-[605px] top-12">
                    <ServiceComponent icon={BoxSearch} name="Business Idea Planning" details="We present you a proposal and discuss niffty-gritty like"/>
                    <ServiceComponent icon={Code1} name="Development Website and App" details="Communication protocols apart from engagement models"/>                
                </div>
                <div className="flex flex-col  gap-y-8 relative right-56 -top-1.5 z-20">
                    <ServiceComponent icon={EmptyWallet} name="Financial Planning System" details="Protocols apart from aengage models, pricing billing"/>
                    <ServiceComponent icon={SquareChart} name="Market Analysis Project" details="Protocols apart from aengage models, pricing billing"/>
                </div>
                <img src={ellipse2} className="w-[120px] h-[128px] absolute -bottom-11 right-44 overflow-hidden z-0" />
        </div>
    )
}

export default Services