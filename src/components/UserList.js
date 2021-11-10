import User from "./User";
import { connect } from "react-redux";

function UserList(props) {
  return (
    <div>
      {props.users.map((user, index) => {
        //renders the User component for each user in the users arrays
        return (
          <div key={index}>
            <User user={user} key={user.id} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UserList);
