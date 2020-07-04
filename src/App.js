import React, { useState } from 'react';
import './App.css';
// import CountryList from './Components/Search';
import { Header } from './Components/Header'
import MainGrid from './Components/MainGrid'
import BottomNavBar from './Components/BottomNavBar';
import CountryStats from './Components/CountryStats'

// export const [lit, setLit] = useState(true)
function App() {
  const screenSwap = useState();
  return (
    <div>
      <Header />
      <MainGrid currentScreen = {screenSwap[0]} />
      <BottomNavBar screenSwap = {screenSwap}/>
      <CountryStats/>
      {/* <CountryList/> */}
    </div>
  );
}

export default App;
