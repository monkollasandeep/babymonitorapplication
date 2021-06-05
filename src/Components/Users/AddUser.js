import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] =useState('')
  const [enteredRealtion, setenteredRealtion] =useState('')
  const [enteredAge, setenteredAge] =useState('')
  const [enteredEmail, setenteredEmail] =useState('')
  const [enteredContactno, setenteredContactno] =useState('')
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredRealtion.trim().length === 0 || enteredAge.trim().length === 0 || enteredEmail.trim().length === 0 || enteredContactno.trim().length === 0) {
        return;
    }
    if(+enteredAge < 1) {
        return;
    }
    if(+enteredContactno < 1000000000) {
        return;
    }
    props.onAddUser(enteredUserName, enteredRealtion, enteredAge, enteredEmail, enteredContactno);
    setenteredUserName('');
    setenteredRealtion('');
    setenteredAge('');
    setenteredEmail('');
    setenteredContactno('');
  };

  const usernameChangeHandler = event => {
    setenteredUserName(event.target.value)
  };
  const relationChangeHandler = event => {
    setenteredRealtion(event.target.value)
  };
  const ageChangeHandler = event => {
    setenteredAge(event.target.value)
  };
  const emailChangeHandler = event => {
    setenteredEmail(event.target.value)
  };
  const contactnoChangeHandler = event => {
    setenteredContactno(event.target.value)
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}/>
        <label htmlFor="relation">Relation</label>
        <input id="relation" type="text" value={enteredRealtion} onChange={relationChangeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={enteredEmail} onChange={emailChangeHandler}/>
        <label htmlFor="contactno">Contact No</label>
        <input id="contactno" type="number" value={enteredContactno} onChange={contactnoChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
