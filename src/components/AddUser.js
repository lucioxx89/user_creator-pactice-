import React, { useState } from "react";

function AddUser() {
  const [entredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [enteredList, setEnteredList] = useState([]);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    if (entredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(entredUsername, enteredAge);
    // setEnteredList(...enteredList, setEnteredList);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      <form onSubmit={FormSubmitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={usernameChangeHandler}
            type="text"
            id="username"
            value={entredUsername} //2 ways binding
            placeholder="Write your username"
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            type="number"
            id="age"
            value={enteredAge} //2 ways binding
            placeholder="Write your age"
          />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>

      <div>
        {/* <ul>
          {enteredList.map((item) => {
            return <li>{item.age}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
}

export default AddUser;
