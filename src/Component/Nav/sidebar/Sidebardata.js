import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from "../../../Theme/Image";


export const Sidebardata = [
    {
        title: "home",
        icon: <img src={IMAGES.home} style={{width:30}}/>,
        Link: "/home"
    },
    {
        title: "Profile",
        icon: <img src={IMAGES.login}style={{width:30}}/>,
        Link: "/profile"
    },
    {
        title: "report",
        icon: <img src={IMAGES.home}style={{width:30}} />,
        Link: "/report"
    },
    {
        title: "logout",
        icon: <img src={IMAGES.login}style={{width:30}} />,
        Link: "/logout"
    }
]