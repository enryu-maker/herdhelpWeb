import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer, Bar, BarChart } from 'recharts';
import moment from 'moment';
import { IMAGES } from '../../Theme/Image'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../Component/Loading'
import FlatList from 'flatlist-react'
import ParentCard from './ParentCard'
import useMediaQuery from '../../Component/useMediaQuery';
export default function ParentOP() {

    const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:420px)') 
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate()
    const { state } = useLocation();
    const { data } = state;
    function DataGen(Data){
        let finalData=[]
        Data.map(a=>{
            var dict = {};
            var d = new Date(a.key);
            dict['x'] =  moment(d).format("yyyy-MM-DD");
            dict['y']=a.tags.length
            finalData.push(dict)
          })
        return finalData;
    }
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: COLORS.transparentPrimary2,
                    ...FONTS.h3,
                    padding: "1px"
                }}>
                    <p className="label">{`${label} : ${payload[0].value} ${"Babies"}`}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <div>
            <Header title={"Babies"}
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
                                setShow(!show)
                            }}
                        >
                            <img src={IMAGES.chart} alt={"back"}
                                style={{
                                    height: 25,
                                    width: 25,
                                    alignSelf: "center",
                                }} />
                        </div>
                    </>
                }
            />
            {
                show ? <div style={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    // alignItems:"center"
                }}>
                    <LineChart width={mobile ? matches ? 600 : 1000 : 350} height={400} data={DataGen(data)} margin={{ top: 20, right: 20, bottom: 50, left: 20 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                        <XAxis dataKey={"x"} angle={-90} tickMargin={30} style={{
                            ...FONTS.h4
                        }}
                        />
                        <YAxis
                            style={{
                                ...FONTS.h4
                            }}
                        >
                            <Label
                            position='insideLeft'
                                style={{
                                    textAnchor: "middle",
                                    fill: COLORS.Primary,
                                    ...FONTS.h2,
                                    marginRight:20
                                }}
                                angle={270}
                                value={"Babies"} />
                        </YAxis>
                        <Tooltip content={<CustomTooltip />} />
                        {/* <Legend/> */}
                        <Line type="monotoneX" dataKey="y" stroke={COLORS.Primary} strokeWidth={2} />
                    </LineChart>
                </div> :

                    <div style={{
                        display: mobile ? "flex" : 'grid',
                        flexDirection: "row",
                        justifyContent: "space-evenly"
                    }}>
                        <FlatList
                            list={data}
                            keyExtractor={item => `${item.key}`}
                            renderItem={(item, index) => {
                                return (
                                    <ParentCard
                                        date={item.key}
                                        data={item.data}
                                        tags={item.tags}
                                    />
                                )
                            }
                            }
                            renderWhenEmpty={() => (<Loading />)}
                        />
                    </div>}
        </div>
    )
}
