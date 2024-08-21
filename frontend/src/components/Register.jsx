import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Row, Col, Container } from "react-bootstrap";

const Register = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		profession: "",
	});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:5000/api/register", user);
			setMessage(res.data.message);
		} catch (error) {
			setMessage("Error: " + error.response.data.message);
		}
	};

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col xs={12} md={6}>
					<h2>Register</h2>
					{message && <Alert variant="info">{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={user.name}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={user.email}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={user.password}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formPhone">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="text"
								name="phone"
								value={user.phone}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formProfession">
							<Form.Label>Profession</Form.Label>
							<Form.Control
								type="text"
								name="profession"
								value={user.profession}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Button variant="primary" type="submit" className="mt-3">
							Register
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Register;
