import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
// components
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title={"Bruh moments"}>
          <NavMenu title={"Home"} link={"/"}></NavMenu>
        </Navbar>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
