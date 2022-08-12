import React from 'react'
import Login from '../Screens/Auth/Login';
import { Routes, Route } from "react-router-dom";
import Main from '../Screens/Home/Main';
import Weight from '../Screens/Home/Weight';
import AddAnimals from '../Screens/Animals/AddAnimals';
import LoadAlerts from '../Screens/Alerts/LoadAlerts';
import LoadFinance from '../Screens/Finance/LoadFinance';
import AddFinance from '../Screens/Finance/addFinance';
import Herds from '../Screens/Home/Herds';
import AddMedication from '../Screens/Animals/AddMedication';
import Profile from '../Component/Profile/profile';
import Report from '../Screens/Report/Report';
import Parents from '../Screens/Parents/Parents';
import Subscription from '../Component/Subscription/Subscription';
import Weighthistory from '../Screens/Report/weighthistory';
import Terms from '../Screens/Terms/terms';
import Add from '../Screens/Animals/add';
import Setting from '../Screens/Setting/Setting';
// import ForgetPass from '../Screens/ForgetPass/forgetPass';

import ProtectedRoute from '../Protection/Protected';
import Info from '../Screens/Home/Info';
import Animal from '../Screens/Home/Animal';
import Flag from '../Screens/Animals/flaganimal'
import Updatebred from '../Screens/Animals/updatebred';
import Loading from '../Component/Loading';
import Children from '../Screens/Children/Children';
import History from '../Screens/Children/History';
import ReportOP from '../Screens/Report/ReportOP';
import { useSelector } from 'react-redux';
import RootNav from './RootNav';
export default function HomeNav() {
  const access = useSelector(state => state.Reducers.authToken)
  return (
    <Routes>
        <Route path="/home" element={<ProtectedRoute Component={Main} access={access} />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/animals" element={<AddAnimals />} />
        <Route path="/medication" element={<AddMedication />} />
        <Route path="/alerts" element={<LoadAlerts />} />
        <Route path="/finance" element={<ProtectedRoute Component={LoadFinance} access={access} />} />
        <Route path="/addfinance" element={<ProtectedRoute Component={AddFinance} access={access} />} />
        <Route path="/herds" element={<Herds />} />
        <Route path='/report' element={<ProtectedRoute Component={Report} access={access} />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/weighthistory' element={<Weighthistory />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/terms-and-condition' element={<Terms />} />
        <Route path='/setting' element={<Setting />} />
        <Route path="/login" element={<Login />} />
        <Route path='/info' element={<ProtectedRoute Component={Info} access={access} />} />
        <Route path='/animal' element={<ProtectedRoute Component={Animal} access={access} />} />
        {/* <Route path='/forgetpassword' element={<ForgetPass/>} />  */}
        <Route path='/Flag' element={<Flag />} />
        <Route path='/Bred' element={<Updatebred />} />
        <Route path='/load' element={<Loading />} />
        <Route path='/children' element={<ProtectedRoute Component={Children} access={access} />} />
        <Route path='/medhistory' element={<ProtectedRoute Component={History} access={access} />} />
        <Route path='/reportop' element={<ProtectedRoute Component={ReportOP} access={access} />} />
        <Route path='/loggedout' element={<RootNav />} />
        </Routes>
  )
}
