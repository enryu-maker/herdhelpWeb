import React, { useState } from 'react'
import NavBar from '../../Component/Nav/Navbar'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";
import { Link } from 'react-router-dom';




export default function Home() {
// 
const [bought, setBought] = useState(false);
// 


function Homecard({title , info , img}) {
return( 
  <div style={{display:'inline-flex' , position:'relative'}}>
  <div style={{width:300,
                height:350,
                top:100,
                // left:100,
                backgroundColor:'rgba(45, 35, 35, 0.51)', 
                borderRadius:'10px 40px', 
                
                position:'relative'
                }}>
            <div style={{backgroundColor:'rgba(52, 52, 52, 1)' , 
                          width:50, 
                          height:50 ,
                          top:10, 
                          left:10,
                          borderRadius:'20px 10px',
                          position:'absolute'}}></div>
                          <img src={img} alt={''} style={{backgroundColor:'rgba(52, 52, 52, 1)' , 
                           
                          width:50, 
                          height:50 ,
                          top:10, 
                          
                          borderRadius:'50px 50px',
                          position:'inherit'}}/>
                          <div style={{backgroundColor:'rgba(52, 52, 52, 1)' , 
                          width:50, 
                          height:50 ,
                          top:10, 
                          right:10,
                          borderRadius:'10px 20px',
                          position:'absolute'}}></div>
<div>
  
  <h3 style={{width:190, 
              height:50,
              top:120,
              left:10,
              textAlign:'left', 
              fontSize:20, 
              position:'absolute', 
              color:COLORS.white}}>{title}</h3>
    <p style={{width:300, 
              height:50,
              top:160,
              left:10,
              textAlign:'left', 
              fontSize:15, 
              position:'absolute',
              color:COLORS.white }}>{info}</p>
<div style={{cursor:'pointer' , width:200 , display:'inline-flex'}}>
<Link to={'/'} style={{textDecoration:'none',
                        width:150,
                        height:40,
                        bottom:0,
                        left:30,
                        display:'flex',
                        position:"absolute",
                        color:'yellowgreen',
                        fontSize:20
                        }}>Learn More 
                        <img src={IMAGES.right} 
                              style={{width:20,  
                                      left:110 ,
                                      top:4, 
                                      backgroundColor:COLORS.lightGray1,
                                      borderRadius:50,
                                      position:'absolute',
                                      textDecoration:'none'}}/></Link>
</div>
</div>
</div>
</div>)  
}
// 
function Namecard({img, name , post , info}) {
  return(
    <div style={{position:'relative',
    top:520,
    width:'100%',
    height:600,
    backgroundColor:COLORS.black,
    display:'inline-flex',
    alignItems:"center",
    justifyContent:"center"}}>
<div style={{width:336,
      height:310,
      backgroundColor:'rgba(52,52,52,1)',
      position:'absolute'}}>
<img src={img} alt={''} 
    style={{width:150,
            borderRadius:100,
            backgroundColor:COLORS.lightGray2,
            padding:5,
            position:'relative', 
            top:'-80px'}}/>
<h2 style={{position:'relative' , 
          top:'-90px' , 
          color:COLORS.white , 
          fontSize:30, 
          fontWeight:500,fontFamily:'Readex Pro'}}>{name}</h2>
<h4 style={{position:'relative' , 
        top:'-110px', 
        fontWeight:10, 
        fontSize:16 , 
        color:COLORS.white,fontFamily:'Readex Pro'}}>{post}</h4>

<p style={{position:'absolute',
          paddingInline:14,
          height:96,
          display:'',
          bottom:10, 
          color:COLORS.white , 
          fontSize:16,
          fontWeight:300}}>{info}</p>
</div>
</div>
  )
}



  return (
    <>
   <NavBar page={'/'}/>
   <div style={{backgroundColor:COLORS.black,}}>
    <div style={{display:'inline-flex' , 
                  justifyContent:'space-between' , 
                  alignSelf:'center',
                  
                  width:'100%',
                  height:600,}}>
      <div style={{
                    // backgroundColor:COLORS.lightGray1, 
                    width:'40%', 
                    height:'60%',
                    position:'absolute',
                    left:100}}>
        <h3 style={{position:'absolute',
                    width:400,
                    color:COLORS.white, 
                    textAlign:'left', 
                    top:80,
                    fontSize:40,

                    }}>Learn all you<br/> need to know<br/> about Trading
                    </h3>
        <h4 style={{position:'absolute',
                    width:500,
                    color:COLORS.white,
                    textAlign:'left',
                    top:250,
                    fontSize:20}}>On our course you will learn everything from the<br/> basics of forex trading right the way through to the 
                    </h4>

                    <div>
                    <button style={{position:'absolute',
                                    top:400,
                                    left:0,
                                    border:'none', 
                                    background:'#FFD600', 
                                    borderRadius:100, 
                                    width:277, 
                                    height:62, 
                                    paddingInline:20, 
                                    fontSize:18 ,
                                    cursor:'pointer'}}>Learn More</button>
                    <button style={{position:'absolute',
                                    top:400,
                                    left:300,
                                    border:'none', 
                                    background:'rgba(255,255,255,0.08)', 
                                    borderRadius:100, 
                                    width:277, 
                                    height:62, 
                                    paddingInline:20, 
                                    fontSize:18,
                                    color:'yellow',
                                    cursor:'pointer'}}>Learn More</button>
                    </div>
        </div>
      <div style={{
                    // backgroundColor:COLORS.lightGray1, 
                    width:'40%', 
                    height:'100%',
                    right:0,
                    position:'absolute',
                    right:0,}}>
                      <div style={{width:"100%", 
                                    height:800, 
                                    display:'inline-flex',
                                    top:100,
                                    // right:150,
                                    }}>
                                      <img src={IMAGES.bellhelo} 
                                        style={{width:250, 
                                            height:400 , 
                                            position:'absolute',
                                            top:30,
                                            backgroundColor:COLORS.layout, 
                                            borderRadius:20}}/>
                                      <img src={IMAGES.bellhelo} 
                                        style={{width:250, 
                                            height:400 , 
                                            left:100,
                                            top:70,
                                            border:'1px solid transparent',
                                            position:'absolute',
                                            backgroundColor:COLORS.lightGray1, 
                                            borderRadius:20,
                                            }}/>
                                    </div>
                    </div>
    </div>
    <div style={{ position:'absolute', 
                  justifyContent:'space-between' , 
                  alignSelf:'center',
                  backgroundColor:COLORS.black,
                  width:'100%',
                  height:600,}}>
      <h2 style={{position:'absolute',
                width:200,
                height:60,
                left:100,
                color:COLORS.white,
                fontSize:25}}>Our top Services</h2>
    {/*  */} 
      <div style={{display:'inline-flex', alignItems:'center', justifyContent:'space-between', gap:50}}>
      <Homecard title={'On-Site Availability'} img={IMAGES.add} info={'On our course you will learn everything from the basics of forex trading right the way through to the complex side of the markets, each student will finish ourcourse with a simple yet effective'} />
      <Homecard title={'On-Site Availability'} img={IMAGES.add} info={'On our course you will learn everything from the basics of forex trading right the way through to the complex side of the markets, each student will finish ourcourse with a simple yet effective'} />
      <Homecard title={'On-Site Availability'} img={IMAGES.add} info={'On our course you will learn everything from the basics of forex trading right the way through to the complex side of the markets, each student will finish ourcourse with a simple yet effective'} />
      </div>
    {/*  */}
    </div>
    {/*  */}
    <div style={{display:'inline-flex', alignItems:'center', justifyContent:'space-between', gap:50}}>
      <Namecard img={IMAGES.age} name={'john'} post={'Senior Manger'} info={'I specialise in  “Forex” and have been trading professionally for 7+ years. My hobbies and trad'}/>
    </div>
    {/*  */}
    </div>
    </>  
  )
}
