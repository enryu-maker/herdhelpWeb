import React, { useState } from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import Sidenav from '../../Component/Nav/sidenav'
import DropDown from '../../Component/DropDown/DropDown'
import { COLORS, SIZES } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';
import Header from '../../Component/Header';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import TextButton from '../../Component/TextButton';
import axiosIns from '../../helpers/helpers';
export default function Parents() {
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const tags = useSelector(state => state.Reducers.tags)
  const species = useSelector(state => state.Reducers.cat)
  const [err, setErr] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const id = localStorage.getItem('id')
  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }
  async function findChildren() {
    setLoading(true);
    try {
      let { data } = await axiosIns.get(
        `reports/getchildren/${id}${valueMS}${valueBS}`,
      );
      if (data.length > 0 && data != undefined) {
        console.log(data)
        setValueBS('')
        setValueMS('')
        setLoading(false);
        return data;
      } else {
        setValueBS('')
        setValueMS('')
        setLoading(false);
        setErr('babies Not found');
      }
    } catch (e) {
      setValueBS('')
      setValueMS('')
      setLoading(false);
      setErr('Server Error');
    }
  }
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
    }}>
      <Sidenav active={"Parents"} />
      <div style={{
        width: "90%",
        float: "right",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <NavBarMain />
        <Header title={"Search Parents"} />
        <div style={{
          paddingTop: "20px",
          backgroundColor: COLORS.lightGray2,
          alignSelf: "center",
          width: "80%",
          borderRadius: SIZES.radius,
          justifyContent: "center"
        }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            <DropDown
              value={valueMS}
              setValue={setValueMS}
              label={"Species*"}
              options={species}
            />
            <DropDown
              value={valueBS}
              setValue={setValueBS}
              label={"Tags*"}
              // options={checking}
              options={finder(tags, valueMS)}
            />
          </div>
        </div>
        <TextButton
          label={"Search"}
          icon={IMAGES.parents}
          onPress={() => {
            findChildren(data => {
              setData(data)
            })
          }}
          buttonContainerStyle={{
            marginTop: "30px",
          }}

        />
      </div>
    </div>
  )
}
