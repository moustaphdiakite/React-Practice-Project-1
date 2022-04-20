import React from "react";

export default function AddUser(props) {
	function addUserhandler(event) {
		event.preventDefault();
	}
	return (
		<form onSubmit={addUserhandler}>
			<label htmlFor="username">Username</label>
			<input id="username" type="text"></input>
			<label htmlFor="age">Age</label>
			<input id="age" type="number"></input>
			<button type="submit">Add user</button>
		</form>
	);
}
