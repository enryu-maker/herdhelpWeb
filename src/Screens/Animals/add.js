import React from 'react'
import { Link } from 'react-router-dom'

import NavBarMain from '../../Component/Nav/navmain'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import FlatList from 'flatlist-react'
import Sidenav from '../../Component/Nav/sidenav'
import { useDispatch } from 'react-redux'
import { getSpecies, getTags } from '../../Store/actions'
import useMediaQuery from '../../Component/useMediaQuery'
import Modal_side from '../../Component/Nav/Modal_side'
export default function Add() {
  const data = [
    {
      'id': 1,
      'label': 'Add Animals',
      'image': IMAGES.add,
      'nav': '/animals'
    },
    {
      'id': 2,
      'label': 'Add Medication',
      'image': IMAGES.med,
      'nav': '/medication',
      'cond': true,
    },
    {
      'id': 3,
      'label': 'Update Weight',
      'image': IMAGES.gain,
      'nav': '/weight'
    },
    {
      'id': 4,
      'label': 'Update Bred',
      'image': IMAGES.bred,
      'nav': '/Bred'
    },
    {
      'id': 5,
      'label': 'Flag Animal',
      'image': IMAGES.flag,
      'nav': '/Flag'
    },
  ]
  const dispatch = useDispatch()
  
  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:400px)') 


  React.useEffect(()=>{
    dispatch(getSpecies())
    dispatch(getTags())
  },[])
  function Cards({
    Name,
    img,
    onPress,
    Path,
  }) {
    return (
      <>
        <Link to={Path}>
          <button
            style={{
              backgroundColor: COLORS.lightGray2,
              height: mobile ? matches ? 250  : 250 :  130,
              margin: SIZES.padding,
              borderRadius: SIZES.radius,
              // flexDirection:"column",
              borderWidth: 0,
              justifyContent: "space-evenly",
              shadowColor: COLORS.Primary,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 2,
              width: mobile ? matches ? 250  : 250 :  120 ,
              cursor: 'pointer',
              boxShadow: '0px 0px 15px -4px #888181',
            }}
            onClick={onPress}
          >
            {/* <img src={IMAGES.rightone} style={{ height: 20, width: 20,alignSelf:"center",marginLeft:200,marginTop:10 }} /> */}
            <img src={img} alt={Name} 
                        style={{ marginTop :mobile ? matches ? 0  : 0 :  10  ,
                                  height: mobile ? matches ? 100  : 100 :  40 , 
                                  width: mobile ? matches ? 100  : 100 :  40 , 
                                  alignSelf: "center" }} />
            <div>
              <div style={{
                textAlign: 'center'
              }}>
                {
                  mobile ? matches ?  <p style={{ ...FONTS.h3, margin: 20 }}>{Name}</p> : 
                                      <p style={{ ...FONTS.h3, margin: 20 }}>{Name}</p> :  
                                      <p style={{ ...FONTS.h5, margin: 20 }}>{Name}</p>
                }
                {/* <p style={{...FONTS.h4}}>{global.unit?`${Weight} lbs`:`${weight_kg} kg`}</p> */}
              </div>
              <div style={{
                display: "flex",
                flexFlow: "column"
              }}>
                {/* <img src={Gender=="Male"? IMAGES.male:IMAGES.female} style={{ height: 50, width: 50,marginTop:25}} /> */}
              </div>
            </div>



          </button></Link>
      </>)
  }
  function Adds(){
    return(
      <div style={{
        display: "flex",
        height: "100vh",
        width: "100%"
      }}>

        <Sidenav />
        <div style={{
          width: "90%",
          float: "right"
        }}>
          <NavBarMain page={'add'} />
          <div style={{
            overflowY: 'scroll',
            height:"90vh",
            paddingInlineStart:0,
            marginBottom:"50px"
        }}>
            <FlatList
              list={data}
              keyExtractor={item => `${item.id}`}
              renderItem={(item, index) => {
                return (
                  <>
                    <Cards
                    key={item.id} 
                      img={item.image}
                      Name={item.label}
                      Path={item.nav}
                    />
                  </>
                )
              }
              }
              renderWhenEmpty={() => <div>List is empty!</div>}
            />
          </div>
        </div>
      </div>  
    )
  }

  return (
    <>
    {
      mobile ? matches ? 
       
       <>
       <Adds/>
       </>
       
       :
       <>
       <Adds/>
       </>
       
        : <>
        
        <div style={{
        display: "flex",
        height: "100vh",
        width: "100%"
      }}>

        {/* <Sidenav /> */}

        <Modal_side/>
        <div style={{
          width: "auto",
          float: "right"
        }}>
          <NavBarMain page={'add'} />
          <div style={{
            overflowY: 'scroll',
            height:"90vh",
            paddingInlineStart:0,
            marginBottom:"50px"
        }}>
            <FlatList
              list={data}
              keyExtractor={item => `${item.id}`}
              renderItem={(item, index) => {
                return (
                  <>
                    <Cards
                    key={item.id} 
                      img={item.image}
                      Name={item.label}
                      Path={item.nav}
                    />
                  </>
                )
              }
              }
              renderWhenEmpty={() => <div>List is empty!</div>}
            />
          </div>
        </div>
      </div>  
        </>
    }
        </>
  )
}

