import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Main from "./components/main/Main";
import Pharma from "./components/Pharma/Pharma";
import RealState from "./components/RealState/RealState";

function App() {
  return (
    <>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Pharma" element={<Pharma/>}/>
            <Route path="/RealState" element={<RealState/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
