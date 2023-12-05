import React from 'react'

const FeatureTwo = () => {
  const services = [
    {
      title: "Identifying profitable",
      desc: "When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed. She produced zero profit in those two years. In our app we have a place to flag certain animals so these scenarios do not take place."
    },
    {
      title: "Control your Expenses",
      desc: "Herd Help Livestock Management Software has specific places to track your expenses by category. This gives you the ability to see where you are spending your money. For example feed, fencing, medications, etc. Understanding your expenses will make life easier! Our livestock management documentation software should help you manage each piece of your farm program better."
    },
    {
      title: "Herd Weight",
      desc: "Herd Help Livestock Management Software will help you track birth weights and daily gains. We don’t care which animals you raise, whether it’s goats, cattle, sheep, pigs, horses, or rabbits, you will see better livestock come from your farm if you know and understand how to increase weights. This is why it was important for us to create an app that not only is for goat records keeping, but also does your cattle record keeping and everything in between. Even our efforts raising rabbits on our farm is better understood when we properly keep better rabbit records."
    },
    {
      title: "Herd Health",
      desc: "Herd Help Livestock Management Software will help you by properly tracking each medication that you administer. It has a simple feature that allows you to treat and document actions on individual animals or on every goat in your herd with one easy step. No one wants to document that you gave Cydectin to each animal. We made it as simple as choosing each animal from the drop down and press add."
    },
    {
      title: "Set Alerts for your Herd",
      desc: "Herd Help Livestock Management Software has a key feature that allows you to set reminders. If you document that goat number 150 gets bred on Oct 2, you can then set a reminder to alert you in 145 days to start watching for your babies. This is where proper livestock records keeping will play a big part in better farm management."
    },
    {
      title: "Birthing",
      desc: "Herd Help Livestock Management Software will assist you in understanding every aspect of your birthing. Proper livestock documentation will show you when your kidding will start taking place and track year over year the amount of babies each animal has. Soon, you will notice which animals give you healthier, more predictive babies. All the tools that you need for livestock records keeping on one simple device!"
    },

  ];
  return (

    <div className="flex flex-col  px-24 max-md:px-14 py-16 justify-center items-center w-full">
      <div style={{
        fontFamily: "Poppins-Bold"
      }} className='text-lg font-bold text-[#39B54A]'>WHAT WE DO</div>
      <div style={{
        fontFamily: "Poppins-Bold"
      }} className='text-4xl max-md:text-2xl max-md:py-3 font-semibold justify-center items-center text-center'>We{'’'}ve got everything you need to <br className='max-md:hidden' /> launch and grow your business
      </div>
      <hr className=' w-[450px] max-md:w-full my-4 pb-7 border-solid border-1 border-black' />
      <div className="flex max-md:flex-col max-md:gap-10  flex-wrap justify-evenly">
        {
          services.map((services) => (


            <div className="flex flex-col h-[200px] w-[40%] max-md:w-full max-md:mb-0 max-md:h-full  gap-5 mb-10">
              <h3 style={{
                fontFamily: "Poppins-Bold"
              }} className='text-2xl font-semibold'>{services.title}</h3>
              <p className='text-sm font-normal text-justify ' style={{
                fontFamily: "Poppins-Regular"
              }}>{services.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FeatureTwo;