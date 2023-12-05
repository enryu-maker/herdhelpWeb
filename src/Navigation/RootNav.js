import React from 'react'
import Login from '../Screens/Auth/Login'
import Home from '../Screens/Home/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import HomeNav from './HomeNav';
import Terms from '../Screens/Terms/terms';
export default function RootNav() {
    return (
        <Routes>
            <Route path="logout" element={<Navigate to="/" />} />
            <Route exact path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path='home' element={<HomeNav />} />
            <Route path='terms' element={<Terms />} />
        </Routes>
    )
}
