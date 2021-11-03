import User from "./User";
import { connect } from "react-redux";


function UserList(props) {

  return (
    <div>

      {props.users.map((user) => {
        //renders the User component for each user in the users array
        return (
          <User
            user={user}
            key={user.id}
            
            
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    users: state.users,
  }
}

export default connect(mapStateToProps) (UserList);