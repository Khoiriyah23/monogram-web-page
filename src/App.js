import './App.scss';
import Header from './componets/Header';
import Main from './componets/Main';
import Footer from './componets/Footer';

import { useState } from "react";

function App() {
  
  const [currency, setCurrency] = useState("");
  return (
    <>
      <Header currency={currency} setCurrency={setCurrency}/>
      <Main currency={currency} setCurrency={setCurrency}/> 
      <Footer />
    </>
  );
}

export default App;
