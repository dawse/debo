import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Checkout = ({ show, onClose, onConfirm }) => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (!show) {
			setName("");
			setAddress("");
			setPhone("");
			setErrors({});
		}
	}, [show]);

	const validate = () => {
		const e = {};
		if (!name.trim()) e.name = "Le nom est requis.";
		if (!address.trim()) e.address = "L'adresse est requise.";
		if (!phone.trim()) e.phone = "Le numéro de téléphone est requis.";
		else if (!/^[0-9]{8}$/.test(phone))
			e.phone = "Le numéro doit contenir exactement 8 chiffres.";
		setErrors(e);
		return Object.keys(e).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		if (onConfirm) onConfirm({ name: name.trim(), address: address.trim(), phone });
		if (onClose) onClose();
	};

	return (
		<Modal show={!!show} onHide={onClose} centered>
			<Form onSubmit={handleSubmit} noValidate>
				<Modal.Header closeButton>
					<Modal.Title>Confirmer la commande</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className="mb-3" controlId="checkoutName">
						<Form.Label>Nom</Form.Label>
						<Form.Control
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							isInvalid={!!errors.name}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.name}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3" controlId="checkoutAddress">
						<Form.Label>Adresse</Form.Label>
						<Form.Control
							type="text"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							isInvalid={!!errors.address}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.address}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3" controlId="checkoutPhone">
						<Form.Label>Téléphone</Form.Label>
						<Form.Control
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
							maxLength={8}
							isInvalid={!!errors.phone}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.phone}
						</Form.Control.Feedback>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onClose}>
						Annuler
					</Button>
					<Button
						type="submit"
						variant="primary"
						disabled={!name.trim() || !address.trim() || !/^[0-9]{8}$/.test(phone)}
					>
						Confirmer
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default Checkout;
