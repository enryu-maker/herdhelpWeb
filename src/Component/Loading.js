import React from 'react'
import ReactLoading from 'react-loading';
import { COLORS } from '../Theme/Theme';
export default function Loading() {
  return (
    <>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
    <ReactLoading type={'cubes'} color={COLORS.Primary} height={50} width={50} />:
    </div>
    </>
  )
}
