import React from 'react'
import Header from '../../Component/Header'
import { FONTS,COLORS,SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image'
import { useNavigate } from 'react-router-dom'
export default function History() {
    const navigate = useNavigate()

  return (
    <div>
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
          title={"Medical History"} />
    </div>
  )
}
