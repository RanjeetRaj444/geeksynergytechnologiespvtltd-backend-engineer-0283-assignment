import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>User Management</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/register">
							<Nav.Link>Register</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/login">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/home">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
