import React from 'react'
import NavBarMain from "../../Component/Nav/navmain";

export default function Weighthistory() {


    function renderHeader() {
        return <NavBarMain />;
      }
      function renderForm() {
        return (
            <div>helo</div>
        )}







  return (
      <>
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
      </>
  )
}
