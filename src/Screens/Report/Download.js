import React from 'react'
import Header from '../../Component/Header'
import useMediaQuery from '../../Component/useMediaQuery';
import { IMAGES } from '../../Theme/Image';
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import { useNavigate, useLocation
    // , Link 
} from 'react-router-dom';

export default function Download() {
    const { state } = useLocation();
    const { data } = state;
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)')
    let navigate = useNavigate()

  return (
    <>
            <Header
                leftcomponent={
                    <>
                        <div style={{
                            display: mobile ? matches ? 'flex' : 'flex' : 'grid',
                            alignSelf: "center",
                            marginRight: mobile ? matches ? -100 : -100 : 0
                        }}>

                            <div style={{
                                display: "flex",
                                height: 40,
                                width: 40,
                                backgroundColor: COLORS.Primary,
                                alignSelf: "center",
                                borderRadius: 20,
                                justifyContent: "center"
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


                        </div>
                    </>
                }
                title='Download Report'
                rightcomponent={
                    <>
                        <div>

                        </div>
                    </>
                }
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
            }}>
                <p style={{
                    ...FONTS.h2,
                }}>Click on the link to download the report</p>
                <button style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    height: 50,
                    width: 200,
                    backgroundColor: COLORS.Primary,
                    borderRadius: SIZES.radius,
                    borderWidth: 0,
                    margin: 10,
                    ...FONTS.h2,
                    alignItems: 'center',
                    color: COLORS.white,
                    cursor: 'pointer'
                }}
                    onClick={() => {
                        window.open(data["link"], '_blank')
                    }}
                >Download</button>
            </div>

                
            </>
  )
}