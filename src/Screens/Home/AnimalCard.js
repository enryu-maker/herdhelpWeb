import React from "react";
import useMediaQuery from "../../Component/useMediaQuery";
import { baseURL } from "../../helpers/helpers";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import { useSelector } from "react-redux";
export default function AnimalCard({
    data,
    onPress,
}) {

    const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)') 
    const unit = JSON.parse(useSelector(state => state.Reducers.unit))

    return (
        <>
            <button
                style={{
                    backgroundColor: COLORS.lightGray2,
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 0,
                    justifyContent: "space-evenly",
                    shadowColor: COLORS.Primary,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    elevation: 2,
                    width: mobile ?  matches ?   "50%" : "25%" : "70%",
                    cursor: 'pointer',
                    alignSelf: "center",
                    padding:"5px"
                }}
                onClick={onPress}
            >
                {
          data.flagged?
        <>
        <div style={{
          height:30,
          width:2,
          transform: 'rotate(45deg)',
          backgroundColor:COLORS.red,
          position:"absolute",
          marginLeft:15,
        }}/>
        <div style={{
          height:40,
          width:2,
          transform: 'rotate(45deg)',
          backgroundColor:COLORS.red,
          position:"absolute",
          marginLeft:20,
        }}/>
        </>:null}
                {/* Imagesection */}
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-evenly"
                }}>
                    <img src={data.animal_image != null ? baseURL + data.animal_image : baseURL + data.image} alt={data.tag_number}
                        style={{
                            height: 90,
                            width: 90,
                            alignSelf: "center",
                            borderRadius: 15,
                        }} />
                 {/* Content section */}
                 <div 
                 style={{
                    display:"flex",
                    flexDirection:"column",
                    alignSelf:"center"
                }}>
                    <p style={{
                        ...FONTS.h3
                    }}>
                        {data.support_tag}
                    </p>
                    <p style={{
                        ...FONTS.body3
                    }}>{data.name}</p>
                    <p style={{
                        ...FONTS.body3
                    }}>{unit?`${data.weight} Lbs`:`${data.weight_kg} Kg`}</p>

                 </div>
                 {/* lastcontent */}
                 <div 
                 style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-evenly"
                }}>
                    <img src={IMAGES.rightone} alt={data.tag_number}
                        style={{
                            height: 20,
                            width: 20,
                            alignSelf: "center",
                            marginLeft:60
                        }} />
                    <img src={data.gender=="Male"?IMAGES.male:IMAGES.female} alt={data.tag_number}
                        style={{
                            height: 40,
                            width: 40,
                            alignSelf: "center",
                        }} />
                 </div>
                 </div>
 

            </button>
        </>
    );
}
