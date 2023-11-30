import React from 'react'

const VideoSection = () => {
  return (
    <div className='flex flex-col justify-center items-center py-28 max-md:py-16  w-full bg-[#0D0C0C] text-white'>
        <div className="text-lg font-bold text-[#39B54A]">SEE HOW OUR APP WORKS </div>
        <div className="text-4xl max-md:text-2xl max-md:pt-3 font-semibold text-center">We love what we do, check out <br /> some of our Tutorials</div>
        <div className='flex gap-20 px-5 pt-16 max-md:flex-col max-md:gap-10 max-md:'>
        <iframe width="320" height="192" src="https://www.youtube.com/embed/4gZZbMJDsqg?si=U1i1ksNWvu7-Nk1l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="320" height="192" src="https://www.youtube.com/embed/y3CvZ4nUJRM?si=JofH-_H993LH9stQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="320" height="192" src="https://www.youtube.com/embed/wnWbbgfSCpc?si=RaCOjOTps2Xyw7Ol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default VideoSection;