import ReactDOM, { createPortal } from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

function Backdrop({ onClick: onConfirm }) {
	return <div className={classes.backdrop} onClick={onConfirm}></div>;
}

function ModalOverlay({ title, message, onClick: onConfirm }) {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{title}</h2>
			</header>
			<div className={classes.content}>
				<p>{message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
}
export default function ErrorModal({ title, message, onConfirm }) {
	return (
		<>
			{createPortal(
				<Backdrop onClick={onConfirm}></Backdrop>,
				document.getElementById("backdrop-root")
			)}
			{createPortal(
				<ModalOverlay
					title={title}
					message={message}
					onClick={onConfirm}
				></ModalOverlay>,
				document.getElementById("overlay-root")
			)}
		</>
	);
}
