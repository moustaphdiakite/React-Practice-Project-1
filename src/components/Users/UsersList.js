import Card from "../UI/Card";
import classes from "./UsersList.module.css";
export default function UsersList({ users }) {
	const listOfUser = users.map((user) => (
		<li>
			{user.name} ({user.age} years old)
		</li>
	));
	return (
		<Card className={classes.users}>
			<ul>{listOfUser}</ul>
		</Card>
	);
}
