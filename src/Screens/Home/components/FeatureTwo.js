import React from 'react'

const FeatureTwo = () => {
  const features = [
    {
      title: 'Identifying Profitable Animals',
      body: ' When proper livestock records are kept on your animals, you start to understand if they are making you a profit. We shipped cows twice before we remembered to ship a cow that had prolapsed. This means that we fed her for two years longer than we should have. She produced zero profit in those two years. In our app, we have a place to flag animals so these scenarios do not take place.'
    },
    {
      title: 'Control your Expenses',
      body: ' Herd Help Livestock Management Software can help you track your expenses by category. For example: feed, fencing, medications, etc. This gives you the ability to see where you are spending your money. Understanding your expenses will make life easier!'
    },
    {
      title: 'Herd Weight',
      body: "Herd Help Livestock Management Software will help you track birth weights and daily gains. We don’t care which animals you raise, whether it’s goats, cattle, sheep, pigs, horses, or rabbits, you will see better livestock come from your farm if you know and understand your animals weights."
    },
    {
      title: 'Herd Health',
      body: 'Herd Help Livestock Management Software helps you track each medication you administer. It allows you to document treatments on individual animals or the entire herd with one easy step.'
    },
    {
      title: 'Set Alerts for your Herd',
      body: 'Herd Help Livestock Management Software has a key feature that allows you to set calendar reminders. You can set reminders for medication withdrawals, expected birth dates, vaccinations, and numerous other events.'
    },

  ];
  return (

    <section className='flex flex-col justify-center items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col justify-center items-center text-center space-y-2 mb-8 sm:mb-10'>
        <span
        style={{
            fontFamily: "Poppins-Bold"
          }}
         className='text-base sm:text-lg lg:text-xl text-[#22C55E]  font-semibold'>WHAT WE DO</span>
        <span
          style={{
            fontFamily: "Poppins-Bold"
          }}
          className='text-2xl sm:text-3xl lg:text-4xl w-full lg:w-[50vw] text-black  font-semibold border-b border-black pb-3 sm:pb-4'>
          We’ve got everything you need to grow your business
        </span>
      </div>

      <div className="w-full bg-bg-default">
        <div className="container mx-auto max-w-6xl">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-2 sm:p-3 lg:p-4"
              >
                <h3
                  style={{
                    fontFamily: "Poppins-Bold"
                  }}
                  className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 "
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins-Regular"
                  }}
                  className="text-xs sm:text-sm lg:text-sm  leading-relaxed"
                >
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureTwo;