//export const ADD_USER = "ADD_USER";

export const addUser = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp() })
      .then(() => {});
  };
  console.log(user);
  // console.log("addUser", user);
  // //user.id = Math.random().toString();
};

export const deleteUser = (userId) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(userId)
      .delete()
      .then(() => {});
  };

  // 	return {
  // 		type: "DELETE_USER",
  // 		payload: userId,
  // 	};
};

export const editUser = (userId, updatedUser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
		.collection("users")
		.doc(userId)
		.update( updatedUser )
		.then(() => {});
  };
  // return {
  // 	type: "EDIT_USER",
  // 	payload: { userId, updatedUser },
  // };
};

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
	  .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) => {
          let users = [];
          snapshot.forEach((doc) => {
            users.push({...doc.data(), id: doc.id});
          });
          console.log(users);
          dispatch({ type: "SET_ALL_USERS", payload: users });
        },
        (error) => {}
      );
  };
};
