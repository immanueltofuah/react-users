import React from "react";
import UserForm from "../components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import UserList from "../components/UserList";
import { signOut } from "../components/actions/authActions";
import { useDispatch, connect } from "react-redux";

function Home(props) {
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
  
  export default connect(null, mapDispatchToProps)(Home);