import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import FlatList from 'flatlist-react';
import AnimalCard from './AnimalCard';
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
                height: 40,
                width: 40,
                backgroundColor: COLORS.Primary,
                alignSelf: "center",
                borderRadius: 20
              }}
              onClick={()=>{
                this.context.router.goBack()
              }}
              >
  
              </div>
            </>
          }
        title={`My ${data.label}'s`}
        rightcomponent={
            <>
              <div style={{}}>
              </div>
            </>
          }
        />
        <ul style={{
            margin:0,
            paddingBottom:"50px"
        }}>
          <FlatList
            
            list={data.data}
            keyExtractor={item => `${item.id}`}
            renderItem={(item,index) => {
              return (
                <>
                <AnimalCard data={item} onPress={()=>{
                    navigate("/info",{
                        state:{data:item}
                    })
                }}/>
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