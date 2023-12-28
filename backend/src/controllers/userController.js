import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export async function Signup(req, res) {
  const { sign } = jwt;

  try {
    const {
      name,
      age,
      gender,
      phoneNumber,
      address,
      email,
      password,
      confirmPassword,
    } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Password and Confirm Password do not match.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      age,
      gender,
      phoneNumber,
      address,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    const token = sign({ id }, process.env.TOKEN_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });

    res
      .status(201)
      .json({ message: "User signed up successfully", success: true, data: user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const auth = await bcrypt.compare(password.trim(), user.password.trim());

    if (!auth) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    console.log('Provided Password:', password);
    console.log('Stored Password:', user.password);


    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });

    res.status(200).json({ message: "User logged in successfully", success: true, token });
  } catch (error) {
    console.error('Login failed', error);
    res.status(500).json({ message: 'Login failed. Please try again.' });
  }
}
