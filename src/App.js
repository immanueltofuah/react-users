import React, { useState, useEffect } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getAllUsers } from "./components/actions/userActions";
import { connect } from "react-redux";

function App(props) {
 
	useEffect(() => {
		props.getAllUsers();
	}, []);
 
  return (
    <div>
      <UserForm 
      />
      <UserList/>
    </div>
  );
}
const mapDispatchToProps = {
  getAllUsers: getAllUsers,
};

export default connect(null, mapDispatchToProps) (App);
