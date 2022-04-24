import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
export default function AddUser({ onAddUser }) {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	function addUserhandler(event) {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
			return;
		if (+enteredAge < 1) return;
		//
		onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
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
					value={enteredUsername}
				></input>
				<label htmlFor="age">Age (Years)</label>
				<input
					id="age"
					type="number"
					onChange={ageChangeHandler}
					value={enteredAge}
				></input>
				<Button type="submit" onClick={addUserhandler}>
					Add user
				</Button>
			</form>
		</Card>
	);
}
