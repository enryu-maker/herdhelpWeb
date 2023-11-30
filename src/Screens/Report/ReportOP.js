import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, formatter, SIZES } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import FlatList from 'flatlist-react';
import ReportCard from './ReportCard';
import { IMAGES } from '../../Theme/Image';
import axiosIns from '../../helpers/helpers';
// import Loading from '../../Component/Loading';
import useMediaQuery from '../../Component/useMediaQuery';
// import TextButton from '../../Component/TextButton';
export default function ReportOP() {
    const [
        // loading, 
        setLoading] = React.useState(false)
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
    function totalmoney(Data) {
        var price = 0
        Data.map(a => {
            if (Label === 'Purchased Animals') {
                price += a.price
            }
            else {
                price += a.soldprice
            }
        })
        return price
    }
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)')

    function Buttonsgr({ amount }) {
        return (
            <>
                <div style={{
                    display: mobile ? matches ? 'grid' : 'flex' : 'grid',
                    justifyContent: 'space-evenly',
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyItems: 'center',
                    position: mobile ? matches ? 'relative' : 'relative' : 'fixed',
                    bottom: mobile ? matches ? null : null : 0,
                    backgroundColor: mobile ? matches ? null : null : 'white',
                    width: mobile ? matches ? null : null : '100%',
                }}>
                    <button style={{
                        display: "inline-flex",
                        justifyContent: 'center',
                        backgroundColor: COLORS.Primary,
                        borderRadius: SIZES.radius,
                        borderWidth: 0,
                        height: 50,
                        width: mobile ? matches ? 380 : 380 : '100%',
                        alignSelf: 'center',
                        cursor: "pointer",
                        marginBottom: 5
                        // marginBottom: 28
                        // ...buttonContainerStyle,
                    }}
                    onClick={() => {
                        navigate('/genratereport', { state: { data: Data, label: Label } })
                    }
                    }
                    >
                        <div style={{
                            margin: 10
                        }}>
                            <img src={IMAGES.file} alt='' style={{
                                height: 25,
                                width: 25,
                                color: COLORS.white,
                                alignSelf: "flex-start",
                                // ...iconStyle
                            }} />
                        </div>
                        <p style={{
                            color: COLORS.white,
                            ...FONTS.body2,
                            //  ...labelStyle,
                            alignSelf: "center", letterSpacing: 1
                        }}>
                            Generate Report
                        </p>
                    </button>
                    {
                        Label === 'Lost Animals' ||
                            Label === 'Sold Animals' ||
                            Label === 'Purchased Animals' ?
                            <div style={{
                                display: "inline-flex",
                                justifyContent: 'center',
                                backgroundColor: COLORS.Primary,
                                borderRadius: SIZES.radius,
                                borderWidth: 0,
                                height: 50,
                                width: mobile ? matches ? 380 : 380 : '100%',
                                alignSelf: 'center',
                                cursor: "pointer",
                                marginBottom: 5,

                                // marginBottom: mobile ? matches ? 28 : 28 : 5,
                                paddingInline:2
                                // ...buttonContainerStyle,
                            }}
                            >
                                <p style={{
                                    color: COLORS.white,
                                    ...FONTS.body2,
                                    //  ...labelStyle,
                                    alignSelf: "center", letterSpacing: 1
                                }}>
                                    {Label}=
                                </p>
                                <p style={{
                                    color: COLORS.white,
                                    ...FONTS.body2,
                                    //  ...labelStyle,
                                    alignSelf: "center", letterSpacing: 1
                                }}>
                                    {formatter.format(totalmoney(Data))}
                                </p>
                            </div> : null

                    }
                </div>
            </>
        )
    }




    return (
        <div>
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
                title={Label}
                rightcomponent={
                    <>
                        <div style={{
                            display: mobile ? matches ? 'flex' : 'flex' : 'flex',
                            alignSelf: "center",
                            marginRight: mobile ? matches ? -100 : -100 : 0,
                            gap: 5

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
            {
                mobile ? matches ? <Buttonsgr /> : <Buttonsgr /> : null
            }
            <ul style={{
                paddingInlineStart: 0,
                position: mobile ? matches ? null : null : 'relative',
                paddingBottom: mobile ? matches ? null : null : 100
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
                                            state: { data: item, cond: false,
                                                Label: Label
                                            }
                                        })
                                    }} />
                            </>
                        )
                    }
                    }
                    renderWhenEmpty={() => <></>}
                />
            </ul>
            {
                mobile ? matches ? null : null :
                    <Buttonsgr />
            }
        </div>
    )
}
