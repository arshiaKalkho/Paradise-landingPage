import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Main from "./components/Main/Main";
import Pharma from "./components/Pharma/Pharma";
import RealEstate from "./components/RealEstate/RealEstate";

function App() {
  return (
    <>
        <BrowserRouter>
          {/* header needs to be under browser router to have router links */}
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Pharma" element={<Pharma/>}/>
            <Route path="/RealState" element={<RealEstate/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
