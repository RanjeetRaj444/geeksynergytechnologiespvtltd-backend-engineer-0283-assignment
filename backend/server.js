const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", userRoutes);

// Connect to MongoDB
mongoose
	.connect(process.env.mongo_url)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
