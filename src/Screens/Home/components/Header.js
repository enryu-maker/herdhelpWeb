import React from 'react'
import ios from "../../../assets/assets/AppleLogo.png";
import logo from "../../../assets/assets/Herd-Help-Logo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
  
      <header className='fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-black py-2 px-4 lg:px-8 shadow-lg'>
        {/* Logo Section */}
        <div className='flex items-center cursor-pointer'>
          <img
            onClick={() => {
              navigate('/')
            }}
            className='w-28 md:w-36 lg:w-40 invert object-contain h-auto'
            src={logo}
            alt="HerdHelp Logo"
          />
        </div>

        <div className="flex items-center space-x-3 md:space-x-6">
          <div className="flex shrink-0">
            <img onClick={() => {
              window.open(
                "https://apps.apple.com/in/app/herdhelp/id1627766617",
                "_blank"
              );
            }}
              className='w-8 md:w-10 lg:w-10 h-auto object-contain transition-transform duration-200 hover:scale-105'
              src={ios}
              alt="iOS App Store Icon"
            />
          </div>
          
          {/* Login Link */}
          <h3
            onClick={() => {
              navigate('/login')
            }}
            style={{
              fontFamily: "Poppins-Bold"
            }}
            className="text-green-500 text-lg md:text-xl lg:text-2xl cursor-pointer font-semibold hover:text-green-700 transition-colors duration-200"
          >
            Login
          </h3>
        </div>
      </header>

  )
}

export default Header;