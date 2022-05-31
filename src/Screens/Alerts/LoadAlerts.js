import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import {species } from "../../Component/Constants";

export default function LoadAlerts() {
  // 
const [valueMS, setValueMS] = useState("");
const [tag, setTag] = useState("");
const [bought, setBought] = useState(false);
const options = ["one", "two", "three"];
const defaultOption = options[0];


//
/* const [alert, setAlerts] = React.useState([]);
  const [species, setSpcies] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function loadFinance() {
    let {data} = await axiosIns.get('alerts/');
    setLoading(true);
    return data;
  }
  React.useEffect(() => {
    setId(global.id);
    setSpcies(global.species);
    loadFinance().then(data => {
      setAlerts(data);
      // console.log(data)
    });
  }, [alert]);
  function delAlert(id){
    axiosIns.delete(`alerts/${id}`).then(()=>{alert("Alert deleted sucessfully")})
   } */

// 

const [cow , dog , pig ] = useState("")

  return (
    <>
    <>
    <NavBarMain 
    page={"alerts"}/>
    </>
    
    <div
      style={{
        // flex: 1,
      }}
    ><p style={{position:'absolute', left:40}}>Add Alert</p>
     
      <div
        style={{
          position:'relative',
          display: 'inline-flex',
          justifyContent: "center",
          alignSelf: "center",
          borderRadius:16,
          width:400,
          height:540,
          top:50,
          backgroundColor:COLORS.layout
        }}
      >
        {/* <DropDown 
        label={'heee'}
        options={species}
        value={'none'}
         /> */}

        <div style={{position:'absolute', top:20}}>
          <div><select style={{margin:20,
                              alignItems:'center',
                              border:'none',
                              background:'none',
                              display:'flex',
                              minWidth:280,
                              height:26,
                              borderBottom:'1px solid black' }}>
              
              <option value={0} >Species</option>
                <option value={0}>Cow</option>
                <option value={0}>pig</option>
                <option value={0}>dog</option>
              
              </select>
            
          </div>
          <div>
            <select style={{margin:20,
                           alignItems:'center',
                           border:'none',
                           background:'none',
                           display:'flex',
                           minWidth:280,
                           height:26,
                           borderBottom:'1px solid black' }}>
           
           <option value={0} >Tags</option>
             <option value={0}>Cow</option>
             <option value={0}>pig</option>
             <option value={0}>dog</option>
           
           </select>
         
       </div>
       <InputForm
              prependComponent={
                <img
                  src={IMAGES.aler}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              
              value={tag}
              label={"Issue"}
              onChange={(event) => {
                setTag(event.target.value);
              }}
            />
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.aler}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              
              value={tag}
              label={"What need to be Done?"}
              onChange={(event) => {
                setTag(event.target.value);
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
                  value={''}
                  label={"Start of Alert"}
                  onChange={(event) => {
                    setValueMS(event.target.value);
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
                  value={''}
                  label={"Start of Alert"}
                  onChange={(event) => {
                    setValueMS(event.target.value);
                  }}
                />
        </div>

      </div>
    </div>
    </>
  )
}
