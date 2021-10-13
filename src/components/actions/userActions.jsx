//action to add new user
export const addUser = (newUser) => {
    //returns the type of action and data to send to the store
    return {
        type: "ADD_User",
        payload: newUser,
    };
    };