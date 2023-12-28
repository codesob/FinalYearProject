
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const Signup = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      phoneNumber,
      address,
      email,
      password
    } = req.body;    
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
      
    }
    else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        name,
        age,
        gender,
        phoneNumber,
        address,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return res.status(200).json({
        status: true,
        message: "User created successfully",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Invalid Email or Password",
      });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    console.log (validPassword)
    if (!validPassword || !user) {
      return res.status(400).json({
        status: false,
        message: "Invalid Email or Password",
      
      });
    } else {
      

      return res.status(200).json({
        status: true,

        message: "Login Successful",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};