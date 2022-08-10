import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import FlatList from 'flatlist-react';
import ReportCard from './ReportCard';
import { IMAGES } from '../../Theme/Image';
import axiosIns from '../../helpers/helpers';
export default function ReportOP() {
    const [loading, setLoading] = React.useState(false)
    const [Data, setData] = React.useState([])
    const [Label, setLable] = React.useState("")

    async function getData(api) {
        setLoading(true)
        let { data } = await axiosIns.get(api)
        console.log(data)
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
                            display: "flex",
                            alignSelf: "center",
                            marginRight: -100
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
                                marginLeft: 30
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
                                data={item} 
                                onPress={() => {
                                    navigate("/info", {
                                        state: { data: item }
                                    })
                                }} />
                            </>
                        )
                    }
                    }
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </ul>
        </div>
    )
}
