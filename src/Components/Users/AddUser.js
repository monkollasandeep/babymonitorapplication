import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const realtionInputRef = useRef();
  const ageInputRef = useRef();
  const emailInputRef = useRef();
  const contactnoInputRef = useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserRealtion = nameInputRef.current.value;
    const enteredUserAge = nameInputRef.current.value;
    const enteredUserEmail = nameInputRef.current.value;
    const enteredUserContactno = nameInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredUserRealtion.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserEmail.trim().length === 0 ||
      enteredUserContactno.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "please enter a valid input",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({ title: "Invalid Input", message: "Please enter a valid age" });
      return;
    }
    if (+enteredUserContactno < 1000000000) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Contact No.",
      });
      return;
    }
    props.onAddUser(
      enteredName,
      enteredUserRealtion,
      enteredUserAge,
      enteredUserEmail,
      enteredUserContactno
    );
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    realtionInputRef.current.value ='';
    emailInputRef.current.value ='';
    contactnoInputRef.current.value ='';
  };

  const erroHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={erroHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="relation">Relation</label>
          <input id="relation" type="text" ref={realtionInputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" ref={emailInputRef} />
          <label htmlFor="contactno">Contact No</label>
          <input id="contactno" type="number" ref={contactnoInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
