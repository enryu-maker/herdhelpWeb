import React from "react";
import Header from "../../Component/Header";
import { useNavigate } from "react-router-dom";
import { COLORS, FONTS } from "../../Theme/Theme";
import { IMAGES } from "../../Theme/Image";

export default function Terms() {
  const navigate = useNavigate();

  function renderHeader() {
  return (
    <Header
      leftcomponent={<div />}     // Empty — no back button
      rightcomponent={<div />}    // Keep your right component
      title="Terms and Services"
    />
  );
}


  function renderForm() {
    return (
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg p-6 sm:p-10">
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={FONTS.h1}>
            Herdhelp Privacy Policy
          </h2>

          {/* Main Content */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8" style={FONTS.body3}>
            Herd Help is owned, operated, and maintained by Grace and Peace, LLC. 
            We respect your right to privacy and share your concern about the security 
            of your ranch data when using Herd Help. Information you enter in Herd Help 
            will be securely stored on our servers. The purpose for this is to allow 
            syncing of your ranch data among the devices you authorize and to provide 
            a backup of your ranch data in the event that you lose all your devices.
            <br /><br />
            We do not mine, sell, or give away your data unless legally required by law enforcement. 
            We use modern security measures to protect collected data, and limit access to only those 
            employees who require it to perform their jobs. All of your ranch data is on each device you 
            have authorized for Herd Help. If needed, you can remotely wipe your ranch data from a device.
            <br /><br />
            We use the email addresses associated with your ranch and each user to provide you with 
            important information regarding your Herd Help ranch account and updates to Herd Help. 
            We are careful to limit email only to what is necessary. If you no longer wish to receive 
            emails from us, you can remove your email address from the ranch and user settings window. 
            When you use the referral code given to you by another ranch, we send them a thank you email 
            which mentions the name of your ranch. In the event of a crash, some of your system data may 
            be collected by a third-party service (HockeyApp) in order to help us understand the nature 
            of the crash, leading to a better product. If you enter your CCIA account credentials and 
            ask Herd Help to submit CCIA events, pertinent information will be sent to CCIA on your 
            behalf. We do not collect or store your credit card number, expiration date, or CVC code. 
            When you add funds to your account, your credit card details are routed directly to our 
            credit card processor (Stripe) and are not stored on any of our servers, even temporarily.
            <br /><br />
            When handling support requests from you, we collect your email address and any 
            information you provide voluntarily (such as logs or other diagnostic information). 
            This information is collected solely to help resolve your support inquiry. We retain 
            support emails indefinitely in order to have context from previous interactions which 
            may help us answer your future questions more quickly and to identify broad trends in 
            support requests, which may help us identify and solve problems with Herd Help. In short, 
            we do everything we can to keep your ranch data private and secure.
          </p>

          {/* Subscription section */}
          <h3 className="text-xl font-semibold mt-6" style={FONTS.body2}>
            Subscription
          </h3>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6" style={FONTS.body3}>
            When you subscribe to Herd Help Premium, Payments will be charged to your Apple account. 
            Auto renewal may be turned off at any time. Current price for Herd Help is $3.99 per month. 
            Your first 3 days are free. Herd Help is a tool to track your animals weights, health, treatments, lineage, profits and losses.
          </p>

          {/* Contact section */}
          <h3 className="text-xl font-semibold mt-6" style={FONTS.body2}>
            Contact Us
          </h3>

          <p className="text-base sm:text-lg mb-3" style={FONTS.body3}>
            If there are any questions regarding this Privacy Policy, you may contact us using the information below.
          </p>

          <ul className="space-y-3 pb-10">
            <li>
              <a
                href="tel:+1(251)225-5434"
                className="text-lg font-medium hover:underline"
                style={{ color: COLORS.Primary, ...FONTS.h2, fontSize: "clamp(18px, 2.2vw, 26px)" }}
              >
                Tel: +1(251)225-5434 
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@herdhelp.com"
                className="text-lg font-medium hover:underline"
                style={{ color: COLORS.Primary, ...FONTS.h2, fontSize: "clamp(18px, 2.2vw, 26px)" }}
              >
                Email: contact@herdhelp.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 py-10">
      {renderHeader()}
      {renderForm()}
    </div>
  );
}
