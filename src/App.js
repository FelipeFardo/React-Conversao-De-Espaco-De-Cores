import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConvertColor from "./components/ConvertColor/ConvertColor";
import { createContext } from "react";


export const globalState = {
  cor: '',
}

export const GlobalContext = createContext();

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <GlobalContext.Provider value={globalState}>
            <div className="container">
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/rgbtohsv" element={<ConvertColor typeColor='RGB' typeNewColor='HSV'/>} />
                <Route path="/hsvtorgb" element={<ConvertColor typeColor='HSV' typeNewColor='RGB'/>} />
                <Route path="/rgbtocmyk" element={<ConvertColor typeColor='RGB' typeNewColor='CMYK'/>} />
                <Route path="/cmyktorgb" element={<ConvertColor typeColor='CMYK' typeNewColor='RGB'/>} />
                <Route path="/rgbtogray" element={<ConvertColor typeColor='RGB' typeNewColor='Escala de Cinza'/>} />
              </Routes>
            </div>
          </GlobalContext.Provider>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
