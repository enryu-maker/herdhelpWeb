import React from 'react'
import { Link } from 'react-router-dom'

import NavBarMain from '../../Component/Nav/navmain'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import FlatList from 'flatlist-react'
export default function add() {
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
              height: 250,
              margin: SIZES.padding,
              borderRadius: SIZES.radius,
              cursor: "pointer",
              // flexDirection:"column",
              borderWidth: 0,
              boxShadow: '0px 0px 11px -3px black',
              justifyContent: "space-evenly",
              shadowColor: COLORS.Primary,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 2,
              width: 250,
            }}
            onClick={onPress}
          >
            {/* <img src={IMAGES.rightone} style={{ height: 20, width: 20,alignSelf:"center",marginLeft:200,marginTop:10 }} /> */}
            <img src={img} alt={Name} style={{ height: 100, width: 100, alignSelf: "center" }} />
            <div>
              <div style={{
                textAlign: 'center'
              }}>
                <p style={{ ...FONTS.h3, margin: 20 }}>{Name}</p>
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

  return (
    <>
      <NavBarMain page={'add'} />
      <div style={{position:'absolute',
            left:170,
            width:'auto'}}>
      <ul>
          <FlatList
            list={data}
            keyExtractor={item => `${item.id}`}
            renderItem={(item,index) => {
              return (
                <>
                <Cards
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
        </ul>
      </div>
    </>
  )
}

