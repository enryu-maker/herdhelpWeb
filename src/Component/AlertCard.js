import React from 'react'
import { useAlert } from 'react-alert'
// import { render } from 'react-dom'
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'

// const options = {
//     // you can also just use 'bottom center'
//     position: positions.BOTTOM_CENTER,
//     timeout: 5000,
//     offset: '30px',
//     // you can also just use 'scale'
//     transition: transitions.SCALE
//   }
  


export default function AlertCard() {
    const alert = useAlert()

  return (
    <>
     <button style={{height:50}}
      onClick={() => {
        alert.show('Animal Added successfully !! :)')
      }}
    >
      Show Alert
    </button>

    {/* <AlertProvider template={AlertTemplate} {...options}>
    
  </AlertProvider> */}
    </>
  )
}

