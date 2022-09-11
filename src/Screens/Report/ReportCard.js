import React from "react";
import useMediaQuery from "../../Component/useMediaQuery";
import { baseURL } from "../../helpers/helpers";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";

export default function ReportCard({
    data,
    onPress,
}) {


    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:420px)') 

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
                    width: mobile ? matches ? "50%" : " 25%" : '70% ',
                    cursor: 'pointer',
                    alignSelf: "center",
                    padding:"5px"
                }}
                onClick={onPress}
            >
                {/* Imagesection */}
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-evenly"
                }}>
                    <img src={data.animal_image != null ? data.animal_image : data.image} alt={data.tag_number}
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
                        ...FONTS.h3
                    }}>{data.name}</p>
                    <p style={{
                        ...FONTS.h3
                    }}>{data.weight}</p>

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
