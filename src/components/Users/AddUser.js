import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
export default function AddUser(props) {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	function addUserhandler(event) {
		event.preventDefault();
		console.log(enteredUsername, enteredAge);
	}

	function usernameChangeHandler(e) {
		setEnteredUsername(e.target.value);
	}
	function ageChangeHandler(e) {
		setEnteredAge(e.target.value);
	}
	return (
		<Card className={classes.input}>
			<form onSubmit={addUserhandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					onChange={usernameChangeHandler}
				></input>
				<label htmlFor="age">Age</label>
				<input id="age" type="number" onChange={ageChangeHandler}></input>
				<Button type="submit" onClick={addUserhandler}>
					Add user
				</Button>
			</form>
		</Card>
	);
}
