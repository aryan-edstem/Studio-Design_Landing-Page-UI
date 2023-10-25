import React from "react";
import BoxSearch from '../assets/box-search.svg';
import ServiceComponent from "./ServiceComponent";
import SquareChart from '../assets/chart-square.svg';
import Code1 from '../assets/code-1.svg';
import EmptyWallet from '../assets/empty-wallet.svg';

const Services =() => {
    return(
        <div className="flex flex-row mt-28 ml-32 gap-10 justify-between">
            <div className="flex flex-col w-[358px] h-[98px] place-self-center ">
                <p className="text-black text-[40px] font-normal leading-normal">How can we help your Business ?</p>
                <p className="w-80 text-gray-600 text-base font-normal leading-7">We build readymade websites, mobile applications, and elaborate online business services.</p>
            </div>
                <div className="flex flex-col  gap-y-10 ">
                    <ServiceComponent icon={BoxSearch} name="Business Idea Planning" details="We present you a proposal and discuss niffty-gritty like"/>
                    <ServiceComponent icon={EmptyWallet} name="Financial Planning System" details="Protocols apart from aengage models, pricing billing"/>
                </div>
                <div className="flex flex-col  gap-y-10 mr-28">
                    <ServiceComponent icon={Code1} name="Development Website and App" details="Communication protocols apart from engagement models"/>
                    <ServiceComponent icon={SquareChart} name="Market Analysis Project" details="Protocols apart from aengage models, pricing billing"/>
                </div>
        </div>
    )
}

export default Services