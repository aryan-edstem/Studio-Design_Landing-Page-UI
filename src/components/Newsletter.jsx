import React from "react";

const Newsletter =() => {
    return (
        <div className="flex flex-row ml-32 h-[292px] w-[1197px]">
            <div className="flex flex-col place-content-center">
                <p className="text-black text-2xl font-normal leading-normal">Subscribe Newsletter</p>
                <p className="w-80 text-gray-600 text-base font-normal leading-7">I will update good news and promotion service not spam</p>
            </div>
            <div className="flex place-content-center">
                <input placeholder="Enter your email addess" className="rounded-[60px] h-20 w-[479px]" />
            </div>
        </div>
    )
}

export default Newsletter