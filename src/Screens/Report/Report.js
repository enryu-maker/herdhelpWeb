import React from 'react'
import { Link } from 'react-router-dom';
import NavBarMain from "../../Component/Nav/navmain";
import { COLORS, FONTS, SIZES } from '../../Theme/Theme';
import './report.css'
import { ReportData } from './ReportData';






export default function Report() {
    
function renderHeader() {
        return <NavBarMain />;
      }
      function renderForm() {
        return (
    <div 
        className='report'>
        <div>
            <p
          style={{
            ...FONTS.largeTitle,
            alignSelf: "center",
          }}
        >
          Report
        </p>
        </div>
        <div className='cards' style={{margin:"auto", padding:20 , width:1200 , backgroundColor:COLORS.lightGray1,borderRadius:SIZES.radius}}>
        {ReportData.map((item , index) => {
            return(<>
                {/* <Link to={item.path}> */}
                <div className='report_card' style={{
                    background:COLORS.white,
                    borderRadius:SIZES.radius
                }}>
                    <span className='reportcard_icon'>{item.icon}</span>
                    <p className='reportcard_title'>{item.title}</p>
                </div>
                {/* </Link> */}
                </>
            )
        })}
        
        
        </div>
        
        </div>
  )
}
return (
    <div
      style={{
        flex: 1,
      }}
    >
      {renderHeader()}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {renderForm()}
      </div>
    </div>
    
)
}

