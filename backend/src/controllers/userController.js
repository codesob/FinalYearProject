import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function Signup(req, res, next) {
  try {
    const {
      name,
      age,
      gender,
      phoneNumber,
      address,
      photo,
      email,
      password,
      confirmPassword,
    } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
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
      photo,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    // res.cookie("token", token, {
    //   withCredentials: true,
    //   httpOnly: false,
    // });
    // })
    res
      .status(201)
      .json({ message: "User signed up successfully", success: true, data:user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function Login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.TOKEN_KEY,
      {
        expiresIn: 3 * 24 * 60 * 60,
      }
    );
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
}
