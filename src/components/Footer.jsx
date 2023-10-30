import React from "react";
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"

const Footer = () => {
    return(
        <div className=" flex flex-row justify-between mr-32 ml-32 mt-32">
            <div className="flex flex-col">
                <p className="mb-7 text-black text-2xl font-normal leading-normal">A+ Studio</p>
                <p className="w-[270px] w-80 text-gray-600 text-base font-normal leading-7">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                <div className="flex gap-6 mt-5">
                    <img src={facebook} className="w-9 h-9" />
                    <img src={twitter} className="w-9 h-9" />
                    <img src={linkedin} className="w-9 h-9" />
                </div>
            </div>
            <div className="flex flex-col">
                <p  className="mb-7 text-black text-2xl font-normal leading-normal">What we do</p>
                <div  className="text-black text-sm font-normal leading-7">
                <p>Web Design</p>
                <p>App Design</p>
                <p>Social Media Manage</p>
                <p>Market Analysis Project</p>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="mb-7 text-black text-2xl font-normal leading-normal">Company</p>
                <div  className="text-black text-sm font-normal leading-7">
                <p>About Us</p>
                <p>Career</p>
                <p>Become Investor</p>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="mb-7 text-black text-2xl font-normal leading-normal">Support</p>
                <div  className="text-black text-sm font-normal leading-7">
                <p>FAQ</p>
                <p>Policy</p>
                <p>Business</p>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="mb-7 text-black text-2xl font-normal leading-normal" >Contact</p>
                <div  className="text-black text-sm font-normal leading-7">
                <p>WhatsApp</p>
                <p>Support 24</p>
                </div>
            </div>

        </div>
    )
}

export default Footer