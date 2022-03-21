import "./App.css";
import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <h1>Create Your User</h1>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={userList} />
    </div>
  );
}

export default App;
