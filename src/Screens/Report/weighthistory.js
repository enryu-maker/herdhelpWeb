import React, { useState } from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import Sidenav from '../../Component/Nav/sidenav'
import DropDown from '../../Component/DropDown/DropDown'
import { COLORS, SIZES } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';
import Header from '../../Component/Header';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import TextButton from '../../Component/TextButton';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';
import { getTags } from '../../Store/actions';
import useMediaQuery from '../../Component/useMediaQuery';
export default function WeightHistory() {
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [whist, setWhist] = useState(null);

  const [name, setName] = useState("");
  const navigate = useNavigate()
  const tags = useSelector(state => state.Reducers.tags)
  const species = useSelector(state => state.Reducers.cat)
  const id = localStorage.getItem('id')
  const unit = useSelector(state => state.Reducers.unit)
  const [err, setErr] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch =useDispatch()
  const matches = useMediaQuery('(min-width:810px)')
  React.useEffect(()=>{
    dispatch(getTags())
  },[])
  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }
  function DataGen(data){
    let finalData = []
    data.map(a=>{
      var dict = {};
      var d = new Date(a.date_from);
      dict['x'] = d.toLocaleString("default", { month: "short" }) + d.getFullYear()
      if(unit){
        dict["y"]=a.weight
      }
      else{
        dict["y"]=a.weight_kg
      }
      
      finalData.push(dict)
    })
    return finalData;
  }
  const updateWeight = async () => {
    if (valueBS != '') {
      setLoading(true);
      try {
        let { data } = await axiosIns.get(
          `getweighthistory/${id}${valueMS}${valueBS}`,
        );
        if (data.length > 0 && data != undefined) {
          setValueBS('')
          setValueMS('')
          const final = DataGen(data)
          setLoading(false)
          return final;
        } else {
          setValueBS('')
          setValueMS('')
          setLoading(false)
          setErr('History not found');
        }
      } catch (err) {
        setValueBS('')
        setValueMS('')
        setLoading(false)
        setErr(err)
      }
    } else {
      setValueBS('')
      setValueMS('')
      setLoading(false);
      setErr('Please Enter valid Data');
    }
  };
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
    }}>
      <Sidenav active={"Weight History"} />
      <div style={{
        width: "90%",
        float: "right",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <NavBarMain />
        <Header title={"Weight History"} />
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
              setValue={setValueMS}
              label={"Species*"}
              // options={checking}
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
        {
          loading ? <Loading /> : <TextButton
            label={"History"}
            icon={IMAGES.weight}
            onPress={() => {
              updateWeight().then(final => {
                navigate('/weightHist',{
                  state: { data: final }
                })
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
