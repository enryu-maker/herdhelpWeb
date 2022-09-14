import React from 'react'
import FlatList from 'flatlist-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image'
import { baseURL } from '../../helpers/helpers'
import Card from '../../Component/Card'
import AnimalCard from '../Home/AnimalCard'
import useMediaQuery from '../../Component/useMediaQuery'
import Loading from '../../Component/Loading'
import P from './P'
export default function ParentCard({
    date,
    onPress,
    data,
    tags
}) {
    const navigation = useNavigate()
    const unit = JSON.parse(useSelector(state => state.Reducers.unit))
    const matches = useMediaQuery('(min-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)') 
    return (
        <>
            <button
                style={{
                    display: "flex",
                    backgroundColor: COLORS.lightGray2,
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 0,
                    justifyContent: "space-around",
                    shadowColor: COLORS.Primary,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    elevation: 2,
                    width: mobile ? matches ? "25%" : "50%" : '90%',
                    cursor: 'pointer',
                    alignSelf: "center",
                    padding: "5px"
                }}
                onClick={() => {
                   navigation("/parentopp",{
                    state:{
                        data:data,
                        date:date
                    }
                   })
                }}
            >
                <div>
                    <p style={{
                        ...FONTS.h2,
                        color: COLORS.Primary,
                        textDecorationLine: "underline",
                        padding: 5
                    }}>
                        {date}
                    </p>
                    <p style={{
                        ...FONTS.h3,
                        color: COLORS.Primary,
                        // alignSelf: "center",
                        textDecorationLine: "underline",
                        padding: 5
                    }}>
                        Tag Number
                    </p>
                    <ul>
                    <FlatList
                        list={tags}
                        renderItem={(item, index) => {
                            return (
                                <li style={{
                                    ...FONTS.h3,
                                    color: COLORS.black,
                                    marginBlockStart:0,
                                    marginBlockEnd:0
                                }}>
                                    {`${item}`}
                                </li>
                            )
                        }
                        }
                        renderWhenEmpty={() => (<></>)}
                    />
                    </ul>
                </div>
                <div >
                    <p style={{
                        ...FONTS.h1,
                        height: 50,
                        width: 50,
                        backgroundColor: COLORS.Primary,
                        borderRadius: 25,
                        display: "flex",
                        alignSelf: "center",
                        justifyContent: "center",
                        color: COLORS.white,
                        alignItems: "center"
                    }}>
                        {
                            tags.length
                        }
                    </p>
                </div>
            </button>
            
        </>
    )
}
