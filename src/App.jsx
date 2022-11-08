import React from "react";
import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {Characters} from "./components/Characters.jsx";
import {Home} from "./components/Home.jsx";
import {MessageHome} from "./components/MessageHome.jsx";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<MessageHome />} />
          <Route path='personaje/:id' element={<Characters />} />
        </Route>
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </Router>
  );
};
