import React from 'react'
import ReactLoading from 'react-loading';
import { COLORS } from '../Theme/Theme';
export default function Loading() {
  return (
    <ReactLoading type={"Spin"} color={COLORS.Primary} height={667} width={375} />
  )
}
