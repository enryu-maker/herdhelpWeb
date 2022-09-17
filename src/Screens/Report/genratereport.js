import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import { IMAGES } from '../../Theme/Image';
import useMediaQuery from '../../Component/useMediaQuery';
import LineDivider from '../../Component/LineDivider';


export default function Genratereport() {
    let navigate = useNavigate()
    const [Data, setData] = React.useState([])
    const [Label, setLable] = React.useState("")
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)')

function Checkbox({
id, 
name ,
value ,}
 ){
return (
    <>
    <div style={{display:'grid' , width:350 }}>
                <div style={{ display:'flex' }}>
            <input type="checkbox"
                    id={id}
                    name={name}
                    value={value}
                    style={{width:20}} 
                    />
                       <p style={{...FONTS.body2 , marginInline:15}}>{name}</p> 
                        </div>
                    <LineDivider/>
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
                            display: mobile ? matches ? 'flex' : 'flex' : 'grid' ,
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
            <div style={{display:'grid' ,
                // textAlign:'left' , 
                justifyContent:'center'}}>
            <div style={{ 
                // display:'grid' ,
                // textAlign:'left' , 
                // justifyContent:'center' 
                width:300,
                backgroundColor:COLORS.lightGray1 ,
                paddingInline:20,
                borderRadius:SIZES.radius
                }}>
                <Checkbox
                id = {"Support_tag"}
                value = {"Support_tag"}
                label = {'Support_tag'}
                name = {'Support_tag'}
                />
                 <Checkbox
                id = {"Name"}
                value = {"Name"}
                label = {'Name'}
                name = {'Name'}
                />
                 <Checkbox
                id = {"Registration"}
                value = {"Registration"}
                label = {'Registration'}
                name = {'Registration'}
                />
                 <Checkbox
                id = {"Species"}
                value = {"Species"}
                label = {'Species'}
                name = {'Species'}
                />
                 <Checkbox
                id = {"Gender"}
                value = {"Gender"}
                label = {'Gender'}
                name = {'Gender'}
                />
                 
                 {/* <Checkbox
                id = {"Gender_Name"}
                value = {"Gender_Name"}
                label = {'Gender_Name'}
                name = {'Gender_Name'}
                /> */}
                 <Checkbox
                id = {"Birth_Date"}
                value = {"Birth_Date"}
                label = {'Birth_Date'}
                name = {'Birth_Date'}
                />        
            </div>
            </div>

            <button style={{
                        display:"inline-flex",
                        justifyContent: 'center',
                        backgroundColor: COLORS.Primary,
                        borderRadius:SIZES.radius,
                        borderWidth:0,
                        height:50,
                        width:320,
                        alignSelf:'center',
                        cursor:"pointer",
                        marginBottom:50,
                        marginTop:30
                        // ...buttonContainerStyle,
        }}
        >
        <div style={{
                margin:10
            }}>
                <img src={IMAGES.aler} style={{height:25,
                                                width:25,
                                                color:COLORS.white,
                                                alignSelf:"flex-start",
                                                // ...iconStyle
                                                }}/> 
            </div>
        <p style={{ color: COLORS.white,
                         ...FONTS.body2, 
                        //  ...labelStyle,
                         alignSelf:"center",letterSpacing:1 }}>
        Generate Report
        </p>
        </button>
   </>
  )
}

