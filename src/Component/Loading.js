import React from 'react'
import ReactLoading from 'react-loading';
import { COLORS,SIZES } from '../Theme/Theme';
export default function Loading() {
  return (
    <>
      <div style={{
        display:"flex",
        justifyContent:"center",
        borderRadius: SIZES.radius,
        borderWidth: 0,
        height: 50,
        marginTop:"20px"
      }}>
        <ReactLoading type={'cubes'} color={COLORS.Primary} height={50} width={50}  />
      </div>
    </>
  )
}
