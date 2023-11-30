import React from 'react'
import aos from "../../../assets/assets/AndroidOS.png";
import ios from "../../../assets/assets/AppleLogo.png";
import logo from "../../../assets/assets/Herd-Help-Logo.png";

const Header = () => {
  return (
    <>
    <nav className='flex w-full h-[60px] bg-black text-white justify-evenly items-center px-24 max-md:px-8 max-md:justify-evenly fixed z-30 top-0 '>
        <div className='flex justify-start items-center '>
            {/* <h3>Herd Help</h3> */}
            <img src={logo} alt="" className=' w-[41%] max-md:w-[55%] invert'  />
        </div>
        <div className="flex w-full gap-5 max-md:justify-center justify-end items-center max-md:items-center ">
            <img src={aos} alt="" className='w-[30px] h-[30px] cursor-pointer'/>
            <img src={ios} alt="" className='w-[30px] h-[30px] cursor-pointer'/>
            <h3 className='text-green-500 font-semibold text-2xl  max-md:text-base pl-5 max-md:pl-2 cursor-pointer'>Login</h3>
        </div>

    </nav>
    </>
  )
}

export default Header;