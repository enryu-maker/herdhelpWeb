import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ Component, access}) => {
  const navigate = useNavigate()
  React.useEffect(()=>{
    access === null? navigate('/login') : <Component/>
  },[])
  console.log(access)
      return( 
        <>
        {access === null? navigate('/login') : <Component/> }
        </>
      )
}
export default ProtectedRoute