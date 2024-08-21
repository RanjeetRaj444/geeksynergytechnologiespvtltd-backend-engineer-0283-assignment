import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:5000/api/login", {
				email,
				password,
			});
			setMessage(res.data.message);
			if (res.data.message === "Login successful") {
				navigate("/home");
			}
		} catch (error) {
			setMessage("Error: " + error.response.data.message);
		}
	};

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col xs={12} md={6}>
					<h2>Login</h2>
					{message && <Alert variant="info">{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Form.Group>
						<Button variant="primary" type="submit" className="mt-3">
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
