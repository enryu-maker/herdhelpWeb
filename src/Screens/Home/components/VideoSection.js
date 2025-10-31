import React from 'react'

const VideoSection = () => {
  return (
    <section className='bg-black w-full py-12 sm:py-16 lg:py-18 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
      <div
        style={{
          fontFamily: "Poppins-Bold"
        }}
        className='flex flex-col justify-center items-center text-center space-y-2  mb-8 sm:mb-10'>
        <span className='text-base sm:text-lg lg:text-xl text-[#22C55E] font-semibold'>
          SEE HOW OUR APP WORKS
        </span>
        <span className='text-2xl sm:text-3xl lg:text-4xl w-full lg:w-[50vw] text-white font-semibold border-b border-white pb-3 sm:pb-4'>
          We love what we do, check out some of our Tutorials
        </span>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12 xl:space-x-16 my-8 sm:my-12 w-full">
        <div className="w-full sm:w-[400px] lg:w-[320px] aspect-video">
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/4gZZbMJDsqg"
            title="Herd help livestock management app tutorial for cows, sheep, goats, pigs, rabbits and horses"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full sm:w-[400px] lg:w-[320px] aspect-video">
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/y3CvZ4nUJRM"
            title="Goat  Farm Software Management APP"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full sm:w-[400px] lg:w-[320px] aspect-video">
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/wnWbbgfSCpc"
            title="Herd Help Livestock Management APP"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection;