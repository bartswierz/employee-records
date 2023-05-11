import React from "react";
import "./App.scss";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar/navbar";
import RecordList from "./components/RecordList/recordList";
import RecordListMobile from "./components/RecordListMobile/recordListMobile";
import Edit from "./components/Edit/edit";
import Create from "./components/Create/create";
import StarAnimation from "./components/StarAnimation/starAnimation";

//TODO - add mobile component
const App = () => {
  return (
    <div className="app">
      <StarAnimation />
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<RecordList />} /> */}
        <Route exact path="/" element={<RecordListMobile />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
