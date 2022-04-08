import React,{useState} from 'react'
import './sidebar.css'
import { COLORS } from '../../../Theme/Theme'
import {Sidebardata}  from './Sidebardata'
import { IMAGES } from '../../../Theme/Image'

function Sidebar() {
const [sidebar , setSidebar] = useState(false);

const showSidebar = ()=>setSidebar(!sidebar)
  

  return (
    <>
    <div className='navbar'>
      <button className='sidebar_btn' onClick={showSidebar}><img src={IMAGES.down} className='side_btn'/></button>

    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    <button className='sidebar_btn2' onClick={showSidebar}><img src={IMAGES.down} className='side_btn1'/></button>
        <ul className='nav-menu-items' onClick={showSidebar}>
                {Sidebardata.map((val, key) => {
                  return (
                    <li key={key} id={window.location.pathname == val.Link ? "active" : ""} className='navbar-toggle' onClick={() => { window.location.pathname = val.Link } }>
                      <div id='icon'>{val.icon}</div>
                      <div id='title'>{val.title}</div>
                    </li>
                  )
                })}
              </ul>
    </nav>
        
          
        
      
      </>
  )
}

export default Sidebar