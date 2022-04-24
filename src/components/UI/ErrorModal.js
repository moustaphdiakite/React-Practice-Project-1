import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
export default function ErrorModal({ title, message }) {
	return (
		<>
			<div className={classes.backdrop}></div>
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{title}</h2>
				</header>
				<div className={classes.content}>
					<p>{message}</p>
				</div>
				<footer className={classes.actions}>
					<Button>Okay</Button>
				</footer>
			</Card>
		</>
	);
}
