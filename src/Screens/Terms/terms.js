import react from 'react'
import Header from '../../Component/Header';
import { COLORS, FONTS } from '../../Theme/Theme';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../Theme/Image';

export default function Terms() {
  let navigate = useNavigate()

  function renderHeader() {

    return (
      <>
        <Header
          leftcomponent={
            <>
              <div style={{
                display: "flex",
                justifyContent: "center",
                height: 40,
                width: 40,
                backgroundColor: COLORS.Primary,
                alignSelf: "center",
                borderRadius: 20
              }}
                onClick={() => {
                  navigate(-1)
                }}
              >
                <img src={IMAGES.back} alt={"back"}
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: "center",
                  }} />
              </div>
            </>
          }
          rightcomponent={
            <div></div>
          }
          title={"Terms and Services"} />
      </>
    );
  }

  function renderForm() {
    return (
      <div style={{
        margin: 0,
        // padding:0,
        minHeight: 100,
        minWidth: 100,
        backgroundColor: COLORS.white,


        textAlign: 'left',
        paddingInline: 20,
        // padding: '10px 0px 50px 50px',
      }}>
        <div>
          <h3 style={{
            ...FONTS.h1
          }}><b>Herdhelp Privacy Policy</b></h3>
          <p style={{
            ...FONTS.body3,
            wordSpacing: 2
          }}>
            Herd Help is owned, operated, and maintained by Grace and Peace, LLC. We respect your right to privacy and share your concern about the security of your ranch data when using Herd Help.
            Information you enter in Herd Help will be securely stored on our servers. The purpose for this is to allow syncing of your ranch data among the devices you authorize and to provide a backup of your ranch data in the event that you lose all your devices. We do not mine, sell, or give away your data unless legally required by law enforcement. We use modern security measures to protect collected data, and limit access to only those employees who require it to perform their jobs.
            All of your ranch data is on each device you have authorized for Herd Help. If needed, you can remotely wipe your ranch data from a device.

            We use the email addresses associated with your ranch and each user to provide you with important information regarding your Herd Help ranch account and updates to Herd Help. We are careful to limit email only to what is necessary. If you no longer wish to receive emails from us, you can remove your email address from the ranch and user settings window.
            When you use the referral code given to you by another ranch, we send them a thank you email which mentions the name of your ranch.
            In the event of a crash, some of your system data may be collected by a third-party service (HockeyApp) in order to help us understand the nature of the crash, leading to a better product.
            If you enter your CCIA account credentials and ask Herd Help to submit CCIA events, pertinent information will be sent to CCIA on your behalf.
            We do not collect or store your credit card number, expiration date, or CVC code. When you add funds to your account, your credit card details are routed directly to our credit card processor (Stripe) and are not stored on any of our servers, even temporarily.
            When handling support requests from you, we collect your email address and any information you provide voluntarily (such as logs or other diagnostic information). This information is collected solely to help resolve your support inquiry. We retain support emails indefinitely in order to have context from previous interactions which may help us answer your future questions more quickly and to identify broad trends in support requests, which may help us identify and solve problems with Herd Help.
            In short, we do everything we can to keep your ranch data private and secure.


            </p>
            <h3 style={{
            ...FONTS.body2
          }}>
            <b>Subscription</b></h3>
            <p style={{
            ...FONTS.body3,
            wordSpacing: 2
          }}>
            When you subscribe to Herd Help Premium, Payments will be charged to your Google Play account. Auto renewal may be turned off at any time. Current price for Herd Help is $6.99 per month. Your first 30 days are free. Herd Help is a tool to track your animals weights, health, treatments, lineage, profits and losses.
            </p>
          <h3 style={{
            ...FONTS.body2,
          }}><b>Contact Us</b></h3>


          <p style={{
            ...FONTS.body3
          }}>
            If there are any questions regarding this Privacy Policy, you may contact us using the information below.
          </p>
          <div style={{ textDecoration: "none",
            paddingBottom:70
        
        }}>
            <li><a href='tel: +1(251) 747-8563' style={{ textDecoration: "none", color: COLORS.Primary, ...FONTS.h2 }} >Tel: +1(251) 747-8563 </a></li>
            <li><a href='mailto: contact@herdhelp.com' style={{ textDecoration: "none", color: COLORS.Primary, ...FONTS.h2 }} >Email: contact@herdhelp.com </a></li>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div
      style={{
        flex: 1,
      }}
    >
      {renderHeader()}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {renderForm()}
      </div>

    </div>
  )
}

