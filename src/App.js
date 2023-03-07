import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id:Math.random() }]
    });
  }
  return (
    <React.Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </React.Fragment>
  );
}

export default App;
