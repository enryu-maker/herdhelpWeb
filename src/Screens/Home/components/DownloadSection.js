import React from 'react'
import arrow from "../../../assets/assets/arrow.png"
import chart from "../../../assets/assets/bar-chart.png"
import expenses from "../../../assets/assets/expenses.png"
import health from "../../../assets/assets/healthcare.png"
import aos from "../../../assets/assets/AndroidOS.png";
import ios from "../../../assets/assets/AppleLogo.png";

const DownloadSection = () => {
  const data = [
    { title: "Track heath of your animals", icon: chart },
    { title: "Track animal birthing", icon: health },
    { title: "Take control of expenses and Profits", icon: arrow },
    { title: "Identify profitable animals", icon: expenses },
  ];
  return (
    <div className='flex max-md:flex-col justify-center items-center py-24 gap-20 max-md:w-full'>
      <div className="flex flex-col justify-center items-center text-center">
        <div style={{
          fontFamily: "Poppins-Bold"
        }} className="text-lg font-bold text-[#39B54A]">THE ONE APP</div>
        <div style={{
          fontFamily: "Poppins-Bold"
        }} className="text-4xl font-semibold text-center max-md:text-2xl max-md:pt-3">That puts you back in control </div>
        <hr className=' w-[450px] my-4 pb-7 border-solid border-1 border-black max-md:w-full' />
        <div className='flex justify-center items-center gap-5'>
        <div style={{
          fontFamily: "Poppins-Bold"
        }} className='flex justify-around flex-row items-center gap-5 bg-[#39B54A] text-2xl font-semibold w-[78px] h-[78px] rounded-full'>
          <img onClick={() => {
            window.open(
              "https://play.google.com/store/apps/details?id=com.herdhelp",
              "_blank"
            );
          }} src={aos} alt="" className='w-[40px] h-[40px] cursor-pointer' />
          </div>
          <div style={{
          fontFamily: "Poppins-Bold"
        }} className='flex justify-around items-center gap-5 bg-[#39B54A] text-2xl font-semibold w-[78px] h-[78px] rounded-full'>
          <img onClick={() => {
            window.open(
              "https://apps.apple.com/in/app/herdhelp/id1627766617",
              "_blank"
            );
          }} src={ios} alt="" className='w-[40px] h-[40px] cursor-pointer' />
          
          </div>
          </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center ">
        {
          data.map((data) => (
            <div key={data.id} className="flex justify-start items-center text-center gap-4 text-white bg-[#222222] w-[475px] max-md:w-[85%]  py-4  px-5 rounded-2xl">
              <div className="bg-[#39B54A] p-3 max-md:w-[60px]  rounded-full">
                <img src={data.icon} alt="" className='w-[30px] object-contain h-[30px] invert' />
              </div>
              <h4 style={{
                fontFamily: "Poppins-Bold"
              }} className='text-xl font-semibold text-start max-md:text-lg'>{data.title}</h4>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default DownloadSection;