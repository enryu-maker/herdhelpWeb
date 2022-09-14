import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image'
import AnimalCard from '../Home/AnimalCard'
import { useLocation, useNavigate } from 'react-router-dom'
import FlatList from 'flatlist-react'
import useMediaQuery from '../../Component/useMediaQuery'
export default function P({
}) {
    const navigate = useNavigate()
    const {state} = useLocation()
    const {data, date} = state

    const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)') 
    return (
        <>
        <Header title={`Babies on ${date}`}
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
        />
        <div style={{display:mobile ? null : 'grid'}}>
            <FlatList
                list={data}
                renderItem={(item, index) => {
                    return (
                        <>
                            <AnimalCard key={item.id} data={item} onPress={() => {
                                navigate("/info", {
                                    state: { data: item }
                                })
                            }} />
                        </>
                    )

                }
                }
                renderWhenEmpty={() => <div></div>}
            />
            </div>
            </>
    )
}
