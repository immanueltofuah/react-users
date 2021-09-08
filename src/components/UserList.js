import React from "react";

function UserList(props) {
  //contains users array
  const users = props.data;

  return (
    <div>
      {
        //loops through the users array and display some JSX for each item
        users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.gen}</h3>
            </div>
          );
        })
      }
    </div>
  );
}
export default UserList;