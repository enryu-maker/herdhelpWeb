import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS  } from '../../Theme/Theme'
import './Navbar.css'

export default function sidenav() {



    function Sidemenu ({img, label , path}){
            return (
                <>
                <Link to={path}  style={{textDecoration:'none' , margin:0, left:20}}>
                <button style={{width:'100%', 
                                height:45  , 
                                display:'flex', 
                                // margin:"auto",
                                left:40,
                                // background:'none' , 
                                // border:'none', 
                                cursor:'pointer'}} className='menu'> 
                    <img src={img}
                    alt="logo"
                    style={{
                        width: 28,
                        height: 28,
                        marginLeft:20,
                        // left: 40,
                        marginTop:7,
                        display:'block',
                    }} /><h3 style={{color:COLORS.white,
                   marginLeft:20 }} >{label}</h3></button></Link>
            </>
            )
    }






  return (
    <>
    <div style={{ position:' absolute',
                    width: 298,
                    height: '100%',
                    left: '-100%',
                    top: 0, 
                    backgroundColor:COLORS.Primary , 
                    }}> 
    <div style={{height:100}}>
    <img
            src={IMAGES.login}
            alt="logo"
            style={{ position: 'absolute',
                width: 48,
                height: 48,
                left: 28,
                top: 39,
                
            }}
          />
          <div style={{fontfamily: 'Poppins',
                        fontstyle: 'normal',
                        lineheight: 26,
                        /* identical to box height, or 162% */
                        display: 'flex',
                        alignitems: 'center',
                        textalign: 'center',
                        texttransform: 'capitalize',
                        color: '#FFFFFF',
                        textAlign:'left',
                        width:'fit-content'}}>
          <h3 style={{position: 'absolute',
                        width: 65,
                        height: 26,
                        left: 95,
                        top: 25,
                        fontSize:15}} >Mr. Jhon</h3>
          <h3 style={{position: 'absolute',
                        width: 100,
                        height: 26,
                        left: 95,
                        top: 43,
                        fontSize:15}} >Robins Farm</h3>
          <h3 style={{position: 'absolute',
                        width: 65,
                        height: 26,
                        left: 95,
                        top: 60,
                        fontSize:15}} >@jhon</h3>
          </div>
         <button style={{background:'none' , 
                            border:'none' , 
                            cursor:'pointer'}} 
                            >
          <img
            src={IMAGES.close2}
            alt="logo"
            style={{ position: 'absolute',
                width: 33,
                height: 33,
                right: 20,
                top: 19,
            }}
          /></button>
    </div>
        <hr style={{border: '1px solid white',
                        top: '1%',
                        position: 'relative',
                        width: '100%',}}>
        </hr>

   
            <Sidemenu 
            img={IMAGES.home}
            label={'Home'}
            path={'/main'}
            />
            <Sidemenu 
            img={IMAGES.file}
            label={'Report'}
            path={'/report'}
            />
            <Sidemenu 
            img={IMAGES.subs}
            label={'Subscription'}
            path={'/subscription'}
            />
    <hr style={{border: '1px solid white',
                    top: '1%',
                    position: 'relative',
                    width: '100%',}}>
        </hr>

        <Sidemenu 
            img={IMAGES.weight}
            label={'Weight History'}
            path={'/weighthistory'}
            />
        <Sidemenu 
            img={IMAGES.parents}
            label={'Parents'}
            path={'/parents'}
            />

    <hr style={{border: '1px solid white',
                    top: '1%',
                    position: 'relative',
                    width: '100%',}}>
        </hr>
    <h3 style={{fontSize:20 , 
                fontWeight:400 , 
                color:COLORS.white , 
                textAlign:'left' ,
                marginLeft:20
                }}>Herd Overview</h3>
     <Sidemenu 
            img={IMAGES.male}
            label={'Male Animals'}
            path={'/'}
            />
        <Sidemenu 
            img={IMAGES.female}
            label={'Female Animals'}
            path={'/'}
            />
     <hr style={{border: '1px solid white',
                    top: '1%',
                    position: 'relative',
                    width: '100%',}}>
        </hr>

        <Sidemenu 
            img={IMAGES.logout}
            label={'Logout'}
            path={'/'}
            />
    {/* </div> */}
        
    </div>
    </>
  )
}

