import User from "../models/userModel";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const userVerification = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  try {
    const data = await jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);

    if (user) {
      return res.json({ status: true, user: user.username });
    } else {
      return res.json({ status: false });
    }
  } catch (err) {
    return res.json({ status: false });
  }
};
