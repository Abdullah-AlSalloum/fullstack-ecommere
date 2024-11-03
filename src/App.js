import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {

  const [countryList , setCountryList] = useState([]);
  const [selectedCountry , setSelectedCountry] = useState('');

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[])

  async function getCountry(url){
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data);
    })
  }

  const value = {
    countryList,
    setSelectedCountry,
    selectedCountry 
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={value}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
