import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import FlatList from 'flatlist-react';
import AnimalCard from './AnimalCard';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';
import useMediaQuery from '../../Component/useMediaQuery';
export default function Animal() {
  let navigate = useNavigate()
  const [search,setSearch] = React.useState(false)
  const [searched,setSearched] = React.useState('')
  const [sep, setSpec] = React.useState('')
  const [vacc, setVacc] = React.useState('')
  const [med, setMed] = React.useState('')
  const [Bred, setBred] = React.useState('')

  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:400px)') 

  const { state } = useLocation();
  const { data } = state;
  function filterList(list) {
    return list.filter(
      (listItem) =>
        (listItem.tag_number
          .toString()
          .toLowerCase()
          .includes(searched.toString().toLowerCase()) ||
        listItem.name.toString().toLowerCase().includes(searched.toString().toLowerCase()) ||
        listItem.weight.toString().includes(searched.toString().toLowerCase()) ||
        listItem.gender.toString().toLowerCase().includes(searched.toString().toLowerCase())) 
        &&
        (listItem.species
          .toString()
          .includes(sep.toString()) &&
          (listItem.vaccinated
          .toString()
          .includes(vacc.toString()) &&
          listItem.medicated
          .toString()
          .includes(med.toString())
          ) &&
          listItem.bred
          .toString()
          .includes(Bred.toString())
          )
    );
  }
  return (
    <div>
      <Header
        leftcomponent={
          <>
            <div style={{
              display: "flex",
              height: 40,
              width: 40,
              backgroundColor: COLORS.Primary,
              alignSelf: "center",
              borderRadius: 20,
              justifyContent: "center"
            }}
              onClick={() => {
                navigate(-1)
              }}
            >
              <img src={IMAGES.back} alt={"back"}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: "center",
                }} />
            </div>
          </>
        }
        title={data.label!="Sheep"?`My ${data.label}s`:`My ${data.label}`}
        rightcomponent={
          <>
            <div style={{
              display: mobile ? matches ? 'flex' : 'flex' : 'grid',
              alignSelf: "center",
              marginRight: mobile ? matches ? -100 : -100 : 0
            }}>
              <p style={{
                ...FONTS.h2,
                height: 40,
                width: 40,
                backgroundColor: COLORS.Primary,
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color:COLORS.white
              }}>
                {data.data.length}
              </p>
              <p style={{
                ...FONTS.h2,
                height: 40,
                width: 40,
                backgroundColor: COLORS.Primary,
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color:COLORS.white,
                marginLeft:mobile ? matches ? 30 : 30 : 0
              }}
              onClick={()=>{
                setSearch(!search)
              }}
              >
                <img src={IMAGES.search} alt={"back"}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: "center",
                }} />
              </p>
            </div>
          </>
        }
      />
      {
        search?
      <InputForm
      prependComponent={
        <img
          src={IMAGES.searchb}
          style={{
            height: 25,
            width: 25,
            margin: 10,
            alignSelf: "center",
          }}
        />
      }
      value={searched}
      placeholder={"Search..."}
      onChange={(event)=>{
        setSearched(event.target.value)
      }}
      appendComponent={
          <img
            src={IMAGES.filter}
            style={{
              height: 25,
              width: 25,
              margin: 10,
              alignSelf: "center",
            }}
          />
      }
      />
      :null
      }
      <ul style={{
          paddingInlineStart:0,
          left:"0px"
      }}>
        <FlatList

          list={filterList(data.data)}
          keyExtractor={item => `${item.id}`}
          renderItem={(item, index) => {
            return (
              <>
                <AnimalCard key={item.id}  data={item} onPress={() => {
                  navigate("/info", {
                    state: { data: item }
                  })
                }} />
              </>
            )

          }
          }
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </ul>
    </div>
  )
}
