import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import FlatList from 'flatlist-react';
import ReportCard from './ReportCard';
import { IMAGES } from '../../Theme/Image';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';
import useMediaQuery from '../../Component/useMediaQuery';
export default function ReportOP() {
    const [loading, setLoading] = React.useState(false)
    const [Data, setData] = React.useState([])
    const [Label, setLable] = React.useState("")

    async function getData(api) {
        setLoading(true)
        let { data } = await axiosIns.get(api)
        setLoading(false)
        return data
    }
    let navigate = useNavigate()
    const { state } = useLocation();
    React.useEffect(() => {
        const { api, label } = state;
        setLable(label)
        getData(api).then(data => {
            setData(data)
        })
    }, [])


  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:400px)')
    return (
        <div>
            <Header
                leftcomponent={
                    <>
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
                    </>
                }
                title={Label}
                rightcomponent={
                    <>
                        <div style={{
                            display: mobile ? matches ? 'flex' : 'flex' : 'grid' ,
                            alignSelf: "center",
                            marginRight: mobile ? matches ? -100 : -100 : 0
                        }}>
                            <p style={{
                                ...FONTS.h2,
                                height: 40,
                                width: 40,
                                backgroundColor: COLORS.Primary,
                                borderRadius: 20,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: COLORS.white
                            }}>
                                {Data.length}
                            </p>
                            <p style={{
                                ...FONTS.h2,
                                height: 40,
                                width: 40,
                                backgroundColor: COLORS.Primary,
                                borderRadius: 20,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: COLORS.white,
                                marginLeft: mobile ? matches ? 30 : 30 : 0
                            }}>
                                <img src={IMAGES.search} alt={"back"}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        alignSelf: "center",
                                    }} />
                            </p>
                        </div>
                    </>
                }
            />
            <ul style={{
                paddingInlineStart: 0,
            }}>
                <FlatList
                    list={Data}
                    keyExtractor={item => `${item.id}`}
                    renderItem={(item, index) => {
                        return (
                            <>
                                <ReportCard 
                                key={item.id} 
                                data={item} 
                                onPress={() => {
                                    navigate("/info", {
                                        state: { data: item, cond:false }
                                    })
                                }} />
                            </>
                        )
                    }
                    }
                    renderWhenEmpty={() =><Loading/>}
                />
            </ul>
        </div>
    )
}
