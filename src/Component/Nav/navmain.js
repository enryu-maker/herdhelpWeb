import React,{  useState }  from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
import "./Navbar.css";




function NavBarMain({
  page,
  navStyle
}) {
  // var {nav , setNavbar} = useState(true);
  
  
  // const changeBackground = () => {
  //   if(window.scrollY >= 75 ){
  //     setNavbar=(true)
  //   }else(
  //     setNavbar=(false)
  //   )
  // }
  // window.addEventListener( `scroll`,changeBackground);

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

// const sidebar = useState(false)
// let openside = document.getElementById('sidebar')
// let closeside = document.getElementById('sidebar')
// function openSidebar(){
//   openside.style.left = '0%';
// }
// function closeSidebar(){
//   closeside.style.left = '-100px';
// }

  return (
    <>
    <div style={{width:'100%'}}>
    <div style={{display:'flex' , width:'100%'}}>
    <div>
        <button style={{background:'none' , 
                        border:'none' , 
                        cursor:'pointer'}} 
                        onClick={()=>{document.getElementById("sidebar").style.left = '0%'; }}>
              <img
                src={IMAGES.menuios}
                alt="logo"
                style={{ height: 20, 
                  width: 20,
                  marginLeft:30,
                  background:COLORS.Primary,
                  borderRadius:40,
                  alignSelf:"center",
                  padding:'10px',
                  margin:10
                }}
              />
          </button>

          {/*  */}
          <>
    <div style={{ position:' absolute',
                    width: 298,
                    height: '100%',
                    left: '-100%',
                    top: 0, 
                    backgroundColor:COLORS.Primary , 
                    }} id='sidebar'> 
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
                            onClick={()=>{document.getElementById("sidebar").style.left = '-100%';}}
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
          {/*  */}

          
      </div>

      <nav style={{
        display: 'flex',
        paddig :'1% 4%',
        justifyContent:'space-between',
        width:'100%',
      }}
      className='nav'
      //  className={nav ? 'nav active': 'nav'}
      >
        
        <div
          style={{
            flex:1,
            padding:'1%',
            fontFamily:'arial'
          }}
        >
          <Link to="/herds" style={{
            color: COLORS.black,
            marginInline:'2%',
            textDecorationColor:page === "/herds" ? 'underline':"none",
            ...FONTS.h3,
          }}>
            Herds
            </Link>
          <Link to="/finance" style={{
            color: COLORS.black,
            marginInline:'2%',
            textDecorationLine:page == "finance"?"underline":"none",
            ...FONTS.h3

          }}>
            finace
            </Link>
            <Link to="/add" style={{
            color: COLORS.black,
            marginInline:'2%',
            textDecorationLine:page==="add"?"underline":"none",
            ...FONTS.h3
          }}>
            Add
            </Link>
            <Link to="/alerts" style={{
            color: COLORS.black,
            marginInline:'2%',
            textDecorationLine:page==="alerts"?"underline":"none",
            ...FONTS.h3
          }}>
            Alerts
            </Link>
            <Link to="/Settings" style={{
            color: COLORS.black,
            marginInline:'2%',
            textDecorationLine:page==="Setting"?"underline":"none",
            ...FONTS.h3
          }}>
            Settings
            </Link>
          <Link to="/logout" style={{
            color: COLORS.black,
            textDecorationLine:page==="logout"?"underline":"none",
            ...FONTS.h3,
            marginInline:'2%'
          }}>
            Logout
            </Link>
        </div>
      </nav>
          <div>
          <Link to="/main">
          <img
            src={IMAGES.login}
            alt="logo"
            style={{ height: 43, 
              width: 43,
              alignSelf:"center",
              marginRight:'20px',
              paddingTop:'25%'
            }}
          />
        </Link>
          </div>
          </div>
          </div>
    </>
  );
}

export default NavBarMain;
