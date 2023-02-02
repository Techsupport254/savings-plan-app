const express = require("express");
const router = express.Router();
const Register = require("../Models/RegisterModel");
const bcrypt = require("bcrypt");

router.post("/register", (req, res) => {
	const saltPassword = bcrypt.genSaltSync(10);
	const securePassword = bcrypt.hashSync(req.body.password, saltPassword);

	const registerUser = new Register({
		username: req.body.username,
		email: req.body.email,
		password: securePassword,
		avatar: req.body.avatar,
	});
	registerUser
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
