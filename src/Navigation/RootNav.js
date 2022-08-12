import React from 'react'
import Login from '../Screens/Auth/Login'
import Signup from '../Screens/Auth/Signup'
import Home from '../Screens/Home/Home'
import { Routes, Route } from "react-router-dom";
import HomeNav from './HomeNav';
export default function RootNav() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/homr' element={<HomeNav/>} />
            <Route path="/*" element={<Login />} />
        </Routes>
    )
}
