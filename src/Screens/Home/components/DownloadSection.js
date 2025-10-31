import React from 'react'
import arrow from "../../../assets/assets/arrow.png"
import chart from "../../../assets/assets/bar-chart.png"
import expenses from "../../../assets/assets/expenses.png"
import health from "../../../assets/assets/healthcare.png"
import ios from "../../../assets/assets/AppleLogo.png";

const DownloadSection = () => {

const features = [
  {
    text: 'Track the health of your animals',
    iconSrc: chart,
    iconAlt: 'Growth Icon'
  },
  {
    text: 'Track animal weights',
    iconSrc: health,
    iconAlt: 'Healthcare Icon'
  },
  {
    text: 'Track your profits and expenses',
    iconSrc: arrow,
    iconAlt: 'Target Icon'
  },
  {
    text: 'Identify profitable animals',
    iconSrc: expenses,
    iconAlt: 'Wallet Icon'
  },
];

  return (
    <section className='flex flex-col lg:flex-row justify-center items-center py-12 sm:py-16 lg:py-18 px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-0 lg:space-x-12'>
      {/* Left Section */}
      <div className='flex flex-col justify-center items-center text-center space-y-2 mb-6 sm:mb-10'>
        <span
        style={{
            fontFamily: "Poppins-Bold"
          }}
         className='text-base sm:text-lg lg:text-xl text-[#22C55E] f font-semibold'>
          THE ONE APP
        </span>
        <span
        style={{
            fontFamily: "Poppins-Bold"
          }}
         className='text-2xl sm:text-3xl lg:text-4xl w-full lg:w-[50vw] text-black  font-semibold pb-3 sm:pb-4'>
          That puts you back in control
        </span>
        <div className='border-b border-black w-[50%] sm:w-[40%] lg:w-[25vw] mx-auto'></div>

        <div className='bg-[#39B54A] rounded-full p-3  sm:my-6 md:my-8 flex justify-center items-center'>
          <img className='w-[12vw] sm:w-[8vw] lg:w-[3vw]' src={ios} alt="iOS Icon" />
        </div>
      </div>

      {/* Right Section (Features) */}
      <div className='flex flex-col space-y-4 sm:space-y-6 w-full sm:w-[80%] lg:w-auto'>
        {features.map((item, index) => (
          <div 
            key={index} 
            className='flex items-center bg-[#222222] py-3 sm:py-4 px-4 sm:px-6 rounded-2xl space-x-3 sm:space-x-6 transition duration-300 hover:shadow-2xl'
          >
            <div className='bg-[#39B54A] rounded-full p-2 sm:p-3 flex shrink-0'>
              <img 
                className='w-5 sm:w-6 lg:w-[2vw] invert' 
                src={item.iconSrc} 
                alt={item.iconAlt} 
              />
            </div>

            <div
            style={{
            fontFamily: "Poppins-Bold"
          }}
             className='text-sm sm:text-lg lg:text-xl text-white font-semibold '>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DownloadSection;