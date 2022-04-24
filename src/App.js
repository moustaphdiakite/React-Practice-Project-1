import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);
	function addUserHandler(uName, uAge) {
		setUsersList(function (prevUsersList) {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	}
	return (
		<div>
			<AddUser onAddUser={addUserHandler}></AddUser>
			<UsersList users={usersList}></UsersList>
		</div>
	);
}

export default App;
