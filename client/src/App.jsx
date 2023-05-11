import React from "react";
import "./App.scss";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// We import all the components we need in our app
import Navbar from "./components/Navbar/navbar";
import RecordList from "./components/RecordList/recordList";
import RecordListMobile from "./components/RecordListMobile/recordListMobile";
import Edit from "./components/Edit/edit";
import Create from "./components/Create/create";
import StarAnimation from "./components/StarAnimation/starAnimation";

//TODO - add mobile component
const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    }

    handleResize(); // Check initial viewport width
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div className="app">
      <StarAnimation />
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<RecordList />} /> */}
        {isMobile ? (
          <Route exact path="/" element={<RecordListMobile />} style={{ overflow: "auto" }} />
        ) : (
          <Route exact path="/" element={<RecordList />} />
        )}
        {/* <Route exact path="/" element={<RecordListMobile />} /> */}
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
