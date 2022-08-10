import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import FlatList from 'flatlist-react';
import AnimalCard from './AnimalCard';
import { IMAGES } from '../../Theme/Image';
export default function Animal() {
  let navigate = useNavigate()
  const { state } = useLocation();
  const { data } = state;
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
              display: "flex",
              alignSelf: "center",
              marginRight: -100
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
                marginLeft:30
              }}>
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
      <ul style={{
        margin: 0,
        paddingBottom: "50px"
      }}>
        <FlatList

          list={data.data}
          keyExtractor={item => `${item.id}`}
          renderItem={(item, index) => {
            return (
              <>
                <AnimalCard data={item} onPress={() => {
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
