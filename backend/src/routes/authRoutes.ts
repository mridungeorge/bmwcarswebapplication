import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { registerUser } from '../controllers/authController';

const router = Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ success: false, message: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.json({ success: true, message: "Logged in successfully" });
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred", error: error.message });
  }
});

export default router;
