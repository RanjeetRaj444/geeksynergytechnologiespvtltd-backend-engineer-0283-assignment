const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
	const { name, email, password, phone, profession } = req.body;
	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: "User already exists" });
		}
		user = new User({ name, email, password, phone, profession });
		await user.save();
		res.json({ message: "User registered successfully" });
	} catch (error) {
		res.status(500).send("Server Error");
	}
});

// Login User
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "Invalid Email or Password" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid Email or Password" });
		}
		res.json({ message: "Login successful", userId: user._id });
	} catch (error) {
		res.status(500).send("Server Error");
	}
});

// List all Users
router.get("/users", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).send("Server Error");
	}
});

// Update User
router.put("/update/:id", async (req, res) => {
	try {
		const { name, phone } = req.body;
		await User.findByIdAndUpdate(req.params.id, { name, phone });
		res.json({ message: "User updated successfully" });
	} catch (error) {
		res.status(500).send("Server Error");
	}
});

// Delete User
router.delete("/delete/:id", async (req, res) => {
	try {
		await User.findByIdAndRemove(req.params.id);
		res.json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).send("Server Error");
	}
});

module.exports = router;
