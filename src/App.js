import React, { useState } from 'react';
import Login from './Components/Login';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uRealtion, uAge, uEmail, uContactno) => {
      setUsersList((prevUsersList) => {
          return [...prevUsersList, {name : uName, relation : uRealtion , age : uAge, email : uEmail, contactno : uContactno, id:Math.random().toString()}];
      });
  };
  return (
    <div>
      <Login/>
      <AddUser onAddUser ={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
