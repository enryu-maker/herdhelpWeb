import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import { IMAGES } from '../../Theme/Image';
import useMediaQuery from '../../Component/useMediaQuery';
import LineDivider from '../../Component/LineDivider';
import axiosIns from '../../helpers/helpers';
import FlatList from 'flatlist-react';
import Loading from '../../Component/Loading';


export default function Genratereport() {
    let navigate = useNavigate()
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)')
    const { state } = useLocation();
    const { label } = state;
    const [data, setData] = React.useState([])
    const [reportdata
        // , setReportdata
    ] = React.useState({})
    React.useEffect(() => {
        axiosIns.get("getfields/")
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [loading, setLoading] = React.useState(false)
    function generate() {
        setLoading(true)
        axiosIns
            .post(
                'reports/generate/',
                {
                    reportdata: reportdata,
                    filter: label,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
            .then(res => {
                setLoading(false)
                navigate('/Download', { state: { data: res.data } })
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }


    function Checkbox({
        id,
        name,
        value,
    }
    ) {
        return (
            <>
                <div style={{ display: 'grid', width: 320 }}>
                    <div style={{ display: 'flex' }}>
                        <input type="checkbox"
                            id={id}
                            name={name}
                            value={value}
                            style={{ width: 20, color: COLORS.Primary, height: 20, alignSelf: "center" }}
                            onClick={(e) => {
                                reportdata[e.target.name] = e.target.checked
                            }}
                        />
                        <p style={{ ...FONTS.body2, marginInline: 15 }}>{name}</p>
                    </div>
                    <LineDivider />
                </div>
            </>
        )
    }
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
                title='Report Generate'
                rightcomponent={
                    <>
                        <div>

                        </div>
                    </>
                }
            />
            <div style={{
                display: 'grid',
                // textAlign:'left' , 
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'grid',
                    // textAlign:'left' , 
                    // justifyContent:'center' 
                    flexDirection: 'column',
                    height: 500,
                    backgroundColor: COLORS.lightGray1,
                    paddingInline: 20,
                    overflowY: 'scroll',
                }}>
                    <FlatList
                        list={data['reportdata']}

                        renderItem={(item, index) => (
                            <Checkbox
                                id={index}
                                value={item}
                                label={item}
                                name={item}
                            />
                        )}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />



                </div>
            </div>
            {
                loading ? <Loading 
                /> :
                    <button style={{
                        display: "inline-flex",
                        justifyContent: 'center',
                        backgroundColor: COLORS.Primary,
                        borderRadius: SIZES.radius,
                        borderWidth: 0,
                        height: 50,
                        width: 320,
                        alignSelf: 'center',
                        cursor: "pointer",
                        marginBottom: 50,
                        marginTop: 30
                        // ...buttonContainerStyle,
                    }}
                        onClick={() => {
                            generate()

                        }}
                    >

                        <>
                            <div style={{
                                margin: 10
                            }}>

                                <img src={IMAGES.file} style={{
                                    height: 25,
                                    width: 25,
                                    color: COLORS.white,
                                    alignSelf: "flex-start",
                                    // ...iconStyle
                                }}
                                alt=''
                                />
                            </div>
                            <p style={{
                                color: COLORS.white,
                                ...FONTS.body2,
                                //  ...labelStyle,
                                alignSelf: "center", letterSpacing: 1
                            }}>
                                Generate Report
                            </p>
                        </>
                    </button>
            }

        </>
    )
}

