import logo from './logo.svg';
import './App.css';
import TextButton from './Component/TextButton';
import InputForm from './Component/InputForm';
import react,{Profiler, useState} from 'react';
import Card from './Component/Card';
import Login from './Screens/Auth/Login';
import Signup from './Screens/Auth/Signup';
import Home from './Screens/Home/Home';
import { Routes,Route } from "react-router-dom";
import NavBar from './Component/Nav/Navbar';
import { COLORS, FONTS } from './Theme/Theme';
import Main from './Screens/Home/Main';
import Weight from './Screens/Home/Weight';
import AddAnimals from './Screens/Animals/AddAnimals';
import LoadAlerts from './Screens/Alerts/LoadAlerts';
import LoadFinance from './Screens/Finance/LoadFinance';
import Herds from './Screens/Home/Herds';
import AddMedication from './Screens/Animals/AddMedication';
import Profile from './Component/Profile/profile';
import Report from './Screens/Report/Report';
import Parents from './Screens/Parents/Parents';
import Subscription from './Component/Subscription/Subscription';


function App() {
  return (
    <>
    <div className="App">

      <header className="App-header">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/weight" element={<Weight/>}/>
          <Route path="/animals" element={<AddAnimals/>}/>
          <Route path="/medication" element={<AddMedication/>}/>
          <Route path="/alerts" element={<LoadAlerts/>}/>
          <Route path="/finance" element={<LoadFinance/>}/>
          <Route path="/herds" element={<Herds/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/parents' element={<Parents/>} />
          <Route path='/subscription' element={<Subscription/>}/>
        </Routes>
      </header>
      
      {/* <footer style={{
        backgroundColor:COLORS.black,
        height:40,
        position:"fixed",
        bottom:0,
        width:"100%",
        marginTop:80
      }}>
        <p style={{
          ...FONTS.h3,
          color:COLORS.white
        }}>Powered by NerdTech</p>
      </footer> */}
    </div>
    </>
  );
}

export default App;
