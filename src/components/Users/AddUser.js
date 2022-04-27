import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

// const [enteredUsername, setEnteredUsername] = useState("");
// const [enteredAge, setEnteredAge] = useState("");
export default function AddUser({ onAddUser }) {
	const [error, setError] = useState();
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	function addUserhandler(event) {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values)",
			});
			return;
		}
		if (+enteredUserAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid and age (> 0)",
			});
			return;
		}
		//
		onAddUser(enteredName, enteredUserAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	}

	function errorHandler() {
		setError(null);
	}
	return (
		<div>
			{error && (
				<ErrorModal
					onConfirm={errorHandler}
					title={error.title}
					message={error.message}
				></ErrorModal>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserhandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef}></input>
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" ref={ageInputRef}></input>
					<Button type="submit" onClick={addUserhandler}>
						Add user
					</Button>
				</form>
			</Card>
		</div>
	);
}
