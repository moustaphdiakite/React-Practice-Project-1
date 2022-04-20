import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
export default function AddUser(props) {
	function addUserhandler(event) {
		event.preventDefault();
	}
	return (
		<Card className={classes.input}>
			<form onSubmit={addUserhandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text"></input>
				<label htmlFor="age">Age</label>
				<input id="age" type="number"></input>
				<button type="submit">Add user</button>
			</form>
		</Card>
	);
}
