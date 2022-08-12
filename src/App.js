import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Init } from './Store/actions';
import Loading from './Component/Loading';
import HomeNav from './Navigation/HomeNav';
import RootNav from './Navigation/RootNav';
import Footer from './Component/Footer/Footer';
function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(true);
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };
  React.useEffect(() => {
    init();
  }, [])
  const access = useSelector(state => state.Reducers.authToken)

  if (loading) {
    return (
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <Loading />
      </div>
    )
  }
  else {
    return (
      <>
        <div className="App">
          <header className="App-header">
              {
                access == null || access == ""?
                  <RootNav />
                  :
                  <HomeNav/>
              }
          </header>
        </div>
        <Footer />
      </>

    );
  }
}

export default App;
