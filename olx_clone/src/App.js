import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Signup from "./Components/Signup/Signup";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";

import { ToastContainer } from "react-toastify";

import { authContext } from "./store/Context";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
function App() {
  const { setRefresh, refresh, user, setUser } = useContext(authContext);
  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/checkAuth");
      setUser({ login: data.loggedIn, details: data.user });
    })();
  }, [refresh, setUser]);
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/sell" element={<CreatePage />} />
          <Route path="/Product" element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
