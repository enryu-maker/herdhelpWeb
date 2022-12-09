import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Main from '../Screens/Home/Main';
import Weight from '../Screens/Home/Weight';
import AddAnimals from '../Screens/Animals/AddAnimals';
import LoadAlerts from '../Screens/Alerts/LoadAlerts';
import LoadFinance from '../Screens/Finance/LoadFinance';
import AddFinance from '../Screens/Finance/addFinance';
import AddMedication from '../Screens/Animals/AddMedication';
import Profile from '../Component/Profile/profile';
import Report from '../Screens/Report/Report';
import Parents from '../Screens/Parents/Parents';
import Subscription from '../Component/Subscription/Subscription';
import Weighthistory from '../Screens/Report/weighthistory';
import Terms from '../Screens/Terms/Terms';
import Add from '../Screens/Animals/add';
import Setting from '../Screens/Setting/Setting';
import ProtectedRoute from '../Protection/Protected';
import Info from '../Screens/Home/Info';
import Animal from '../Screens/Home/Animal';
import Flag from '../Screens/Animals/flaganimal'
import Updatebred from '../Screens/Animals/updatebred';
import Loading from '../Component/Loading';
import Children from '../Screens/Children/Children';
import History from '../Screens/Children/History';
import ReportOP from '../Screens/Report/ReportOP';
import Genratereport from '../Screens/Report/genratereport';

import { useDispatch, useSelector } from 'react-redux';

import RootNav from './RootNav';
import { getFcat, getFinance, getHerds, getSpecies, getTags, UserData } from '../Store/actions';
import WeightPage from '../Screens/Report/WeightPage';
import ParentOP from '../Screens/Parents/ParentOP';
import P from '../Screens/Parents/P';
import Edit from '../Screens/Home/Edit';
import Status from '../Screens/Home/Status';
import Modal_side from '../Component/Nav/Modal_side';

export default function HomeNav() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(UserData(), getSpecies(), getTags(), getHerds(), getFcat(), getFinance())
  }, [])
  const access = useSelector(state => state.Reducers.authToken)
  return (
    <Routes>
      <Route path="in" element={<Navigate to="/" />} />
      <Route exact path="/" element={<ProtectedRoute Component={Main} access={access} />} />
      <Route path="add" element={<Add />} />
      <Route path="profile" element={<Profile />} />
      <Route path="weight" element={<Weight />} />
      <Route path="animals" element={<AddAnimals />} />
      <Route path="medication" element={<AddMedication />} />
      <Route path="alerts" element={<ProtectedRoute Component={LoadAlerts} access={access} />} />
      <Route path="finance" element={<ProtectedRoute Component={LoadFinance} access={access} />} />
      <Route path="addfinance" element={<ProtectedRoute Component={AddFinance} access={access} />} />
      <Route path='report' element={<ProtectedRoute Component={Report} access={access} />} />
      <Route path='parents' element={<ProtectedRoute Component={Parents} access={access} />} />
      <Route path='weighthistory' element={<ProtectedRoute Component={Weighthistory} access={access} />} />
      <Route path='subscription' element={<ProtectedRoute Component={Subscription} access={access} />} />
      <Route path='terms' element={<Terms/>} />
      <Route path='setting' element={<ProtectedRoute Component={Setting} access={access} />} />
      <Route path='info' element={<ProtectedRoute Component={Info} access={access} />} />
      <Route path='edit' element={<Edit/>} />
      <Route path='status' element={<Status/>} />
      <Route path='animal' element={<ProtectedRoute Component={Animal} access={access} />} />
      {/* <Route path='/forgetpassword' element={<ForgetPass/>} />  */}
      <Route path='Flag' element={<Flag />} />
      <Route path='Bred' element={<Updatebred />} />
      <Route path='load' element={<Loading />} />
      <Route path='children' element={<ProtectedRoute Component={Children} access={access} />} />
      <Route path='medhistory' element={<ProtectedRoute Component={History} access={access} />} />
      <Route path='reportop' element={<ProtectedRoute Component={ReportOP} access={access} />} />
      <Route path='weightHist' element={<ProtectedRoute Component={WeightPage} access={access} />} />
      <Route path='parentop' element={<ProtectedRoute Component={ParentOP} access={access} />} />
      <Route path='parentopp' element={<ProtectedRoute Component={P} access={access} />} />
      <Route path='Modal' element={<Modal_side />} />
      <Route path='out' element={<RootNav />} />
      <Route path='genratereport' element={<Genratereport/>} />
      <Route path="*" element={<Navigate to="not-found"/>} />
    </Routes>
  )
}
