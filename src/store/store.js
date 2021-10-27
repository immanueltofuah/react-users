import {createStore, applyMiddleware} from "redux";
import firebase from "../Firebase/config";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import usersReducer from "../reducers/usersReducer";



const store = createStore(usersReducer);


export default store;
