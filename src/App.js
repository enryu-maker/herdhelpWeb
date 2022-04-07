import logo from './logo.svg';
import './App.css';
import TextButton from './Component/TextButton';
import InputForm from './Component/InputForm';
import react,{useState} from 'react';
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/weight" element={<Weight/>}/>
          <Route path="/animals" element={<AddAnimals/>}/>
          <Route path="/medication" element={<AddMedication/>}/>
          <Route path="/alerts" element={<LoadAlerts/>}/>
          <Route path="/finance" element={<LoadFinance/>}/>
          <Route path="/herds" element={<Herds/>}/>
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
  );
}

export default App;
