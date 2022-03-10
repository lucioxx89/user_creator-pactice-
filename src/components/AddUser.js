import React, { useState } from "react";

function AddUser() {
  const [username, setUsername] = useState("");

  const usernameChangeHandler = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    setUsername("");
  };
  return (
    <div>
      <form onSubmit={FormSubmitHandler}>
        <div>
          <label>Username</label>
          <input
            onChange={usernameChangeHandler}
            type="text"
            value={username} //2 ways binding
            placeholder="Write your username"
          />
        </div>
        <div>
          <label>Age(Years)</label>
          <input
            onChange={ageChangeHandler}
            type="number"
            placeholder="Write your age"
          />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>

      <div>
        <p>{username}</p>
      </div>
    </div>
  );
}

export default AddUser;
