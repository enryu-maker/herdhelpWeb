import React, { useState } from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import InputForm from '../../Component/InputForm'
import NavBarMain from '../../Component/Nav/navmain'
import { COLORS } from '../../Theme/Theme'
import { IMAGES } from "../../Theme/Image";
import { useSelector, useDispatch } from 'react-redux';
import TextButton from '../../Component/TextButton'
import axiosIns from '../../helpers/helpers'
import { getFinance } from '../../Store/actions'
import useMediaQuery from '../../Component/useMediaQuery'
import { useAlert } from 'react-alert'
export default function AddFinance() {
  const [cat, setCat] = React.useState(1);
  const [Qty, setQty] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [valueMS, setValueMS] = useState("");
  const species = useSelector(state => state.Reducers.fcat)
  const token = useSelector(state => state.Reducers.authToken)
  const alert = useAlert()
  const data = JSON.stringify({
    price: price,
    category: valueMS,
    quantity: Qty,
  });
  const dispatch = useDispatch()

  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)') 
  async function postfinance() {
    // setLoading(true)
    if (price != "" && Qty != "") {
      await axiosIns
        .post('finance/', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(Response => {
          if (Response.status == 201) {
            dispatch(getFinance(token))
            alert.success("Finance Added Sucessfull")
            setQty('');
            setPrice('');
          } else {
            alert.error("Internal Server Error")
            console.log(Response.status)
            // setLoading(false)
          }
        })
        .catch(err => {
          alert.error(err)
          console.log(err)
        })
    } 
    else {
      alert.error("Required Fields cannot be empty")
      console.log("Last div")
    }
  }

  return (
    <>
      {/* <NavBarMain /> */}
      <>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: matches ? 30 : 0,
        }}>
          <div style={{
            backgroundColor: COLORS.lightGray2,
            borderRadius: 10,
            padding: "40px"
          }}>
            <DropDown
              value={valueMS}
              onPress={(e)=>{
                setValueMS(e.value)
              }}
              label={"Category*"}
              options={species}
            />
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.tag}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={Qty}
              label={"Quantity"}
              onChange={(event) => {
                setQty(event.target.value);
              }}
            />
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.money}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={price}
              label={"Price"}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <TextButton
              label={"Add Finance"}
              icon={IMAGES.add}
              onPress={() => {
                postfinance();
                document.getElementById('Addfinance').style.display = 'none'
              }}
            />
          </div>

        </div>
      </></>
  )
}

