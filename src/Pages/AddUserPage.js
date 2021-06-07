import { Fragment } from "react";
import React, { useState } from "react";
import AddUser from "../Components/Users/AddUser";
import UsersList from "../Components/Users/UsersList";

const AddUserPage = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uRealtion, uAge, uEmail, uContactno) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          relation: uRealtion,
          age: uAge,
          email: uEmail,
          contactno: uContactno,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </Fragment>
  );
};

export default AddUserPage;
