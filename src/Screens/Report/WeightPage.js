// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer, Bar, BarChart } from 'recharts';
// import { IMAGES } from '../../Theme/Image';
// import { COLORS, FONTS } from '../../Theme/Theme';
// import Header from '../../Component/Header';
// import { useSelector } from 'react-redux';
// export default function WeightPage() {
//   const unit = useSelector(state => state.Reducers.unit)

//     const navigate = useNavigate()
//     const { state } = useLocation();
//     const { data } = state;
//     const CustomTooltip = ({ active, payload, label }) => {
//         if (active && payload && payload.length) {
//             return (
//                 <div style={{
//                     backgroundColor: COLORS.transparentPrimary2,
//                     ...FONTS.h3,
//                     padding: "1px"
//                 }}>
//                     <p className="label">{`${label} : ${payload[0].value} ${unit?"Lbs":"Kg"}`}</p>
//                 </div>
//             );
//         }

//         return null;
//     };
//     return (
//         <div>
//             <Header
//                 leftcomponent={
//                     <>
//                         <div style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             height: 40,
//                             width: 40,
//                             backgroundColor: COLORS.Primary,
//                             alignSelf: "center",
//                             borderRadius: 20
//                         }}
//                             onClick={() => {
//                                 navigate(-1)
//                             }}
//                         >
//                             <img src={IMAGES.back} alt={"back"}
//                                 style={{
//                                     height: 25,
//                                     width: 25,
//                                     alignSelf: "center",
//                                 }} />
//                         </div>
//                     </>
//                 }
//                 title={"Weight History"}
//                 rightcomponent={
//                     <div>
//                     </div>
//                 }
//             />
//             <div style={{
//                 display: "flex",
//                 height: "100vh",
//                 justifyContent: "center",
//                 // alignItems:"center"
//             }}>
//                 <LineChart width={1000} height={400} data={data} margin={{ top: 20, right: 20, bottom: 50, left: 20 }} >
//                     <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
//                     <XAxis dataKey={"x"} angle={-90} tickMargin={30} style={{
//                         ...FONTS.h4
//                     }}
//                     />
//                     <YAxis
//                         style={{
//                             ...FONTS.h4
//                         }}
//                     >
//                         <Label
//                         position='insideLeft'
//                             style={{
//                                 textAnchor: "middle",
//                                 fill: COLORS.Primary,
//                                 ...FONTS.h2,
//                                 marginRight:20
//                             }}
//                             angle={270}
//                             value={unit?"Weight (LBS)":"Weight (KG)"} />
//                     </YAxis>
//                     <Tooltip content={<CustomTooltip />} />
//                     {/* <Legend/> */}
//                     <Line type="monotone" dataKey="y" stroke={COLORS.Primary} strokeWidth={2} />
//                 </LineChart>
//             </div>
//         </div>
//     )
// }
