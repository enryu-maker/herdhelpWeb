import './App.css';
import Login from './Screens/Auth/Login';
import Signup from './Screens/Auth/Signup';
import Home from './Screens/Home/Home';
import { Routes, Route } from "react-router-dom";
import Main from './Screens/Home/Main';
import Weight from './Screens/Home/Weight';
import AddAnimals from './Screens/Animals/AddAnimals';
import LoadAlerts from './Screens/Alerts/LoadAlerts';
import LoadFinance from './Screens/Finance/LoadFinance';
import AddFinance from './Screens/Finance/addFinance';
import Herds from './Screens/Home/Herds';
import AddMedication from './Screens/Animals/AddMedication';
import Profile from './Component/Profile/profile';
import Report from './Screens/Report/Report';
import Parents from './Screens/Parents/Parents';
import Subscription from './Component/Subscription/Subscription';
import Weighthistory from './Screens/Report/weighthistory';
import Terms from './Screens/Terms/terms';
import Footer from './Component/Footer/Footer';
import Add from './Screens/Animals/add';
import Setting from './Screens/Setting/Setting';
// import ForgetPass from './Screens/ForgetPass/forgetPass';
import Male from './Screens/Alerts/Male'
import Female from './Screens/Alerts/Female';
import ProtectedRoute from './Protection/Protected';
import { useDispatch, useSelector } from 'react-redux';
import Info from './Screens/Home/Info';
import Animal from './Screens/Home/Animal';

import Flag from './Screens/Animals/flaganimal'
import Updatebred from './Screens/Animals/updatebred';
import React from 'react';
import { Init } from './Store/actions';
import Loading from './Component/Loading';

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(true);
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };
  React.useEffect(() => {
    init();
  },[])
  const access = useSelector(state => state.Reducers.authToken)
  if (loading) {
    return (
      <div style={{ flex: 1, justifyContent: 'center' }}>
        {Loading()}
      </div>
    )
  }
  else {
    return (
      <>
        <div className="App">

          <header className="App-header">
            <Routes>
              {
                access == null ?
                  <>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/*" element={<Login />} />

                  </> : <>
                    <Route path="/add" element={<Add />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<ProtectedRoute Component={Main} access={access} />} />
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
                    <Route path='/male' element={<Male />} />
                    <Route path='/female' element={<Female />} />
                    <Route path='/info' element={<ProtectedRoute Component={Info} access={access} />} />
                    <Route path='/animal' element={<ProtectedRoute Component={Animal} access={access} />} />

                    {/* <Route path='/forgetpassword' element={<ForgetPass/>} />  */}
                    <Route path='/Flag' element={<Flag />} />
                    <Route path='/Bred' element={<Updatebred />} />
                    <Route path='/load' element={<Loading />} />

                  </>
              }
            </Routes>
          </header>

        </div>
        <Footer />




      </>

    );
  }
}

export default App;
