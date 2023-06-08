import React from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Signup from "./Components/Signup/Signup";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import AuthContext from "./store/Context";
import { ToastContainer } from "react-toastify";
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <AuthContext>
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
        </AuthContext>
    </div>
  );
}

export default App;
