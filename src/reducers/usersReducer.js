const initialState= {
users:[
    
]

}

const usersReducer =(state = initialState, action)=>{
    switch (action.type) {
        case "ADD_USER":
            
            return { ...state, users: [...state.users, action.payload]};
           
           case "DELETE_USER":
               const filteredUsers = state.users.filter(
                   (user) => user.id !== action.payload
               );
               return { ...state, users: filteredUsers }; 
           
           default:
                return state;
               
        }

        

};

export default usersReducer;