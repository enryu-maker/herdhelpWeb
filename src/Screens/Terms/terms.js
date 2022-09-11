import React, { useState }  from 'react'
import Header from '../../Component/Header';
import NavBarMain from "../../Component/Nav/navmain";
import { COLORS, FONTS } from '../../Theme/Theme';
import { useNavigate, useLocation } from 'react-router-dom';
import { IMAGES } from '../../Theme/Image';

export default  function Terms() {
    let navigate = useNavigate()
  
function renderHeader(){
   
  return(
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

function renderForm(){
    return(
        <div style={{
            margin: 0,
            // padding:0,
            minHeight:100,
            minWidth:100,
            backgroundColor:COLORS.white,

            
            textAlign:'left',
            padding:'10px 0px 50px 50px',
        }}>
            <div>
            <h3 style={{
                ...FONTS.h1
            }}><b>Herdhelp Privacy Policy</b></h3>
                <p style={{
                    ...FONTS.h3
                }}>
                This privacy policy discloses the privacy practices for <a href='https://herdhelp.com' style={{textDecoration:"none",color:COLORS.Primary,...FONTS.h3}}> herdhelp.com</a>
                
                . This privacy policy applies solely to information collected by this web site. It will notify you of the following:
                </p>

                <p style={{
                    ...FONTS.body3,
                    wordSpacing:2
                }}>
                    1. What personally identifiable information is collected from you through the web site, how it is used and with whom it may be shared.<br/>
                    2. What choices are available to you regarding the use of your data.<br/>
                    3. The security procedures in place to protect the misuse of your information.<br/>
                    4. How you can correct any inaccuracies in the information.

                </p>
                </div>

                <div>
            <h3 style={{
                ...FONTS.h2
            }}><b>Information Collection, Use, and Sharing</b></h3>
                

                <p style={{
                    ...FONTS.body3
                }}>
                    "We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order. Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy. 

                </p>
                </div>

                <div > 
            <h3 style={{
                ...FONTS.body2
            }}><b>Your Access to and Control Over Information</b></h3>
                

                <p style={{marginLeft:20,
                    ...FONTS.body3
                }}>
    <li>See what data we have about you, if any.</li>              
    <li> Change/correct any data we have about you.</li>
    <li> Have us delete any data we have about you.</li>
    <li> Express any concern you have about our use of your data.</li>
   

                </p>
                </div>

                <div>
            <h3 style={{
                ...FONTS.h2
            }}><b>Personal Information / Personally Identifiable Information</b></h3>
                

                <p style={{
                    ...FONTS.body3
                }}>
                    Without the need for further, repeated consents (aside from the acceptance of this Privacy Policy) by the user, Personal Information, Personally Identifiable Information and/or Financial Information shall be collected by the Herdhelp Platform on an ongoing basis, for one or more of the following reasons: 

                </p>

                <p style={{
                    ...FONTS.body3,
                    marginLeft:20
                }}>
                   <li>To identify the User, to understand his/her/its needs and resolve disputes, if any; </li>
                   <li>To set up, manage and facilitate the offer of Products, and to enhance the Services to meet the user’s requirements; </li>
                   <li>To resolve technical issues and troubleshoot problems; </li>
                   <li>To meet legal and regulatory requirements; </li>
                   <li>To provide ongoing service; </li>
                   <li>To keep users apprised of the Herdhelp Platform’s promotions and offers; </li>
                   <li>To detect and protect the Herdhelp Platform from error, fraud and other criminal activities; </li>
                   <li>Other reasons which, prior to being put into effect, shall be communicated to the users through an update carried out to this Privacy Policy. </li>
                </p>
                </div>
                <div>
            <p style={{
                ...FONTS.h2
            }}><b>Policy Updates</b></p>
                

                <p style={{
                    ...FONTS.body3
                }}>
                  Our Privacy Policy may change from time to time and all updates will be posted on this page. If you feel that we are not abiding by this privacy policy, you should contact us immediately via email <a href='mailto:contact@herdhelp.com' style={{textDecoration:"none",color:COLORS.Primary,...FONTS.body3}}>contact@herdhelp.com </a>
                </p>
                </div>

                <div>
            <h3 style={{
                ...FONTS.body2
            }}><b>Contact Us</b></h3>
                

                <p style={{
                    ...FONTS.body3
                }}>
                  If there are any questions regarding this Privacy Policy, you may contact us using the information below. 
                </p>
                <div style={{textDecoration:"none"}}>
                <li><a href='tel: +1(251) 747-8563' style={{textDecoration:"none",color:COLORS.Primary,...FONTS.h2}} >Tel: +1(251) 747-8563 </a></li>
                <li><a href='mailto: contact@herdhelp.com' style={{textDecoration:"none",color:COLORS.Primary,...FONTS.h2}} >Email: contact@herdhelp.com </a></li>
                </div>
                </div>
        </div>
    )}  
    
    
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

