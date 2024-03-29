import React, { useState } from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import Sidenav from '../../Component/Nav/sidenav'
import DropDown from '../../Component/DropDown/DropDown'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme';
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
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)') 
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
     <Sidenav active={"Parents"}/>
      <div style={{
       width:mobile ? matches ? '100%' : '90%' : '100%',
       float:"right",
      }}>
        <NavBarMain />
        <p style={{ ...FONTS.h2, color: COLORS.Primary }}>Search Parents</p>
        <div style={{
          paddingTop: "20px",
          backgroundColor: COLORS.lightGray2,
          width: mobile ? matches ? "80%" : "80%" : '90%',
          borderRadius: SIZES.radius,
          marginTop:30,
          marginLeft:'10%'
        }}>
          <div
            style={{
              display:mobile ? matches ? 'grid': "flex" : 'grid',
              justifyContent: mobile ? matches ?  'space-around': "space-evenly" : "space-around"
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
