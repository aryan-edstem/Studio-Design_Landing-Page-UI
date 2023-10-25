import React from "react";

const Header = () => {
    return(
        <div className='mx-28 mt-11 flex flex-row justify-between'>
        <div className="text-black font-proxima-nova text-[27.147px] font-bold leading-normal"><h1>A+ Studio</h1></div>
        <div className='flex flex-row justify-between gap-14 text-black font-averta text-base font-normal leading-normal tracking-tighter '>
          <p>Home</p>
          <p>What we do</p>
          <p>Service</p>
          <p>Project</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div> 
    )
}

export default Header