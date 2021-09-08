import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users,user]);
  }
 
 
  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <UserList data={users} />
    </div>
  );
}

export default App;
