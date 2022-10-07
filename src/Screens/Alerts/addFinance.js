import React, { useState } from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import InputForm from '../../Component/InputForm'
import NavBarMain from '../../Component/Nav/navmain'
import { COLORS } from '../../Theme/Theme'
import { IMAGES } from "../../Theme/Image";
import { useSelector, useDispatch } from 'react-redux';
import TextButton from '../../Component/TextButton'
import axiosIns from '../../helpers/helpers'
import { getAlerts, getFinance } from '../../Store/actions'
import useMediaQuery from '../../Component/useMediaQuery'
import { useAlert } from 'react-alert'
import moment from 'moment'
export default function AddFinance() {
  const [cat, setCat] = React.useState(1);
  const [Qty, setQty] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [Date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");




  const species = useSelector(state => state.Reducers.cat)
  const tags = useSelector(state => state.Reducers.tags)
  const token = useSelector(state => state.Reducers.authToken)
  const alert = useAlert()
  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }
  const dispatch = useDispatch()
  const id = localStorage.getItem("id")
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')
  const data = JSON.stringify(
    {
      "title": title,
      "content": content,
      "tag_number": valueBS ? `${id}${valueMS}${valueBS}` : "",
      "support_tag": valueBS,
      "start_date": moment(Date).format('YYYY-MM-DD'),
    },
  )
  async function postfinance() {
    // setLoading(true)
    if (title != "" && Date != "") {
      await axiosIns
        .post('alerts/', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(Response => {
          if (Response.status == 201) {
            dispatch(getAlerts())
            alert.success("Alert Added Sucessfull")
            setTitle('');
            setContent('');
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
            padding: "30px"
          }}>
            <DropDown
              value={valueMS}
              onPress={(e) => {
                setValueMS(e.value)
              }}
              label={"Species*"}
              options={species}
            />
            <DropDown
              value={valueBS}
              onPress={(x) => {
                setValueBS(x.label)
              }}
              label={"Tags*"}
              // options={checking}
              options={finder(tags, valueMS)}
            />
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.issue}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={title}
              label={"Issue?*"}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />

            <InputForm
              prependComponent={
                <img
                  src={IMAGES.what}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={content}
              label={"What needs to be Done?*"}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.calender}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"date"}
              value={Date}
              label={"Alert Date*"}
              onChange={(event) => {
                const d = moment(event.target.value).format("YYYY-MM-DD")
                setDate(d);
              }}
            />
            <TextButton
              label={"Add Alert"}
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

