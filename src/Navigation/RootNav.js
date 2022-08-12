import React from 'react'
import Login from '../Screens/Auth/Login'
import Signup from '../Screens/Auth/Signup'
import Home from '../Screens/Home/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import Terms from '../Screens/Terms/terms';
import HomeNav from './HomeNav';
export default function RootNav() {
    return (
        <Routes>
            <Route path="/out" element={<Navigate to="/" />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/in' element={<HomeNav />} />
            <Route path='/terms-and-condition' element={<Terms />} />
            <Route path="/*" element={<Login />} />
        </Routes>
    )
}
