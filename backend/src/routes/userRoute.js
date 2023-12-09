import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password: await User.encryptPassword(password) });
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isValidPassword = await User.comparePassword(password);
    if (!isValidPassword) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
