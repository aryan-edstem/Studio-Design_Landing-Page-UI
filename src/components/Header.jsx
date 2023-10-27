import React from "react";

const Header = () => {
    return(
        <div className='mx-28 mt-11 flex flex-row justify-between'>
        <div className="text-black font-proxima-nova text-[27.147px] font-bold leading-normal"><h1>A+ Studio</h1></div>
        <div className='flex flex-row justify-between gap-14 text-black font-averta text-base font-normal leading-normal tracking-tighter '>
          <button><p>Home</p></button>
          <button><p>What we do</p></button>
          <button><p>Service</p></button>
          <button><p>Project</p></button>
          <button><p>Blog</p></button>
          <button><p>Contact</p></button>
        </div>
      </div> 
    )
}

export default Header