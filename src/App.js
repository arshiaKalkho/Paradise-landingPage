import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Main from "./components/Main/Main";
import Pharma from "./components/pharma/Pharma/Pharma";
import RealEstate from "./components/realEstate/RealEstate/RealEstate";

function App() {
  return (
    <>
        <BrowserRouter>
          {/* Reminder: if header is put outside of the browserRouter we can't use link element inside un nested component like header in this case, it must be inside the browser router */}
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Pharma" element={<Pharma/>}/>
            <Route path="/RealEstate" element={<RealEstate/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
