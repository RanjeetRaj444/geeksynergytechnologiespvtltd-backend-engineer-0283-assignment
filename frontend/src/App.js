import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import NavigationBar from "./components/Navbar";

function App() {
	return (
		<Router>
			<NavigationBar />
			<div className="container mt-4">
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
