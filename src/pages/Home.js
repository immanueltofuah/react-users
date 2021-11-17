import React,{useEffect} from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { signOut } from "../components/actions/authActions";
import { useDispatch, connect } from "react-redux";
import { reactReduxFirebase } from "react-redux-firebase";
import { getAllUsers } from "../components/actions/userActions";

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