import React from 'react'
import AnimalCard from '../Component/AnimalCard'
import NanBarmain from '../Component/Nav/navmain'
import { IMAGES } from '../Theme/Image'
import { COLORS } from '../Theme/Theme'


export default function cow() {
  return (
    <>
    <NanBarmain/>

<div style={{display:'flex', justifyContent:'space-around'}}>

   <AnimalCard 
   img={IMAGES.cow}
   name={'milkku'}
   idnumber={1001221}
   weight={100}
   />
    <AnimalCard 
   img={IMAGES.cow}
   name={'milkku'}
   idnumber={1001221}
   weight={100}
   />


    </div>

    </>
  )
}
