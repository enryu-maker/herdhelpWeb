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
import useMediaQuery from '../../Component/useMediaQuery';
import Loading from '../../Component/Loading';
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
  const matches = useMediaQuery('(min-width:810px)')
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
        `babiesbydate/${id}${valueMS}${valueBS}`,
      );
      // console.log(data)
      if (data) {
        console.log(true)
        setValueBS('')
        setValueMS('')
        setLoading(false);
        navigate('/parentop',{
          state:{
            data:data
          }
        })
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
              display: matches ? "flex" : 'grid',
              justifyContent: matches ? "space-evenly" : 'space-around'
            }}
          >
            <DropDown
              value={valueMS}
              onPress={(x) => {
                setValueMS(x.label)
              }}
              label={"Species*"}
              // options={checking}
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
          </div>
        </div>
        {
          loading ? <Loading />
            :
            <TextButton
              label={"Search"}
              icon={IMAGES.parents}
              onPress={() => {
                findChildren(data => {
                  // console.log(data)
                  // setData(data)
                })
              }}
              buttonContainerStyle={{
                marginTop: "30px",
              }}

            />
        }
      </div>
    </div>
  )
}
