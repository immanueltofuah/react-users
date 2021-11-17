import React, { useState, useEffect } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getAllUsers } from "./components/actions/userActions";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route } from "react-router-dom";

function App(){  
 return (
  <BrowserRouter>
<ProtectedRoute exact path="/" component={Home} />
<Route path="/login" component={Login} />
<Route path="/register" component={Register} />
</BrowserRouter>
);
}
 
	

export default App;
