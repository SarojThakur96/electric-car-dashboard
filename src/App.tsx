import { useRef, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MapViewPage from "./pages/MapPage/MapViewPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  // };
  return (
    <div className="flex w-full h-screen relative ">
      <div>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={`flex-grow h-screen overflow-y-auto ease-in-out duration-300 `}
      >
        <div>
          <Header />
        </div>
        <div className="h-[90vh] w-full ">
          {/* <Home /> */}
          {/* <MapViewPage
            isOpen={isOpen}
          /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<MapViewPage isOpen={isOpen} />} />
            <Route path="/master" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
