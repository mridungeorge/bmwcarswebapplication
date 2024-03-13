import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

// Register user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Error registering user', error: error.message });
  }
};

// Login user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ success: true, message: "Logged in successfully" });
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (error: any) {
    res.status(500).json({ success: false, message: "An error occurred", error: error.message });
  }
};
