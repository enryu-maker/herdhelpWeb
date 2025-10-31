import React from 'react'

const FeatureOne = () => {
  return (
        <section className='bg-[#39B54A] py-8 md:py-16 w-full flex flex-col justify-center items-center px-4 md:px-8'>
            <div className='flex flex-col justify-center items-center space-y-2 mb-12 text-center'>
                <span
                    style={{
                        fontFamily: "Poppins-Bold"
                    }}
                    className='text-lg lg:text-xl text-black  font-semibold tracking-wide'>
                    HELLO THERE
                </span>
                <h2
                    style={{
                        fontFamily: "Poppins-Bold"
                    }}
                    className='text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold border-b-2 border-white pb-2 '>
                    We Are Herd Help
                </h2>
            </div>

            <div
                style={{
                    fontFamily: "Poppins-Regular"
                }}
                className='text-md md:text-xl text-white max-w-6xl text-center leading-relaxed'>
                We are farmers. For a long time, we struggled to keep up with the necessary documentation to manage our farm profitably.
                We tried apps, software programs, spreadsheets, even pen and paper, to help with the record keeping but nothing worked.
                We needed something better! We created an app that is easy to navigate and farmer friendly.
                It doesn’t matter if you raise cattle, sheep, goats, rabbits, pigs, or horses, Herd Help will make maintaining your records an ease.
                No farm is too small. Whether you have 2-3 animals on your small homestead, or 200+ on a full time operation, Herd Help is the app for you!
            </div>
        </section>
  )
}

export default FeatureOne;