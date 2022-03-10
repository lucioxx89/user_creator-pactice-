import React, { useState } from "react";

function AddUser() {
  const usernameChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const ageChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input
            onChange={usernameChangeHandler}
            type="text"
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
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
