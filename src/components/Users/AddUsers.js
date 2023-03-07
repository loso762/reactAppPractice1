import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from "./AddUsers.module.css";
import ErrorModal from '../UI/ErrorModal';

function AddUsers(props) {

  const [Username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, seterror] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (Username.trim().length === 0 || age.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message : "Please enter a valid name and age"
      });
      return ;
    }
    if (+age < 1) {  
      seterror({
        title: "Invalid age",
        message : "Please enter a valid age ( > 0 )"
      });
      return;
    }

    props.onAddUser(Username, age);
    
    setUsername('');
    setAge('');
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);    
  }
  const ageChangeHandler = (e) => {
    setAge(e.target.value);    
  }

  const closeModal = () => {
    seterror();
    console.log(error);
    setUsername('');
    setAge('');
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} escModal={ closeModal } />}
      <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
          <input
            id='username'
            value={Username}
            type="text"
            onChange={usernameChangeHandler}
          />

        <label htmlFor='age'>Age</label>
          <input
            id='age'
            value={age}
            type="number"
            onChange={ageChangeHandler}
          />

        <Button type='submit'>Add users</Button>
      </form>
      </Card>
    </>
  );
}

export default AddUsers;