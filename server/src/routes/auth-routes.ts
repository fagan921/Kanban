import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET_KEY || "your_super_secret_key";

// ✅ Complete login function
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // 🔹 Check if the user exists in the database
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // 🔹 Validate the password using bcrypt
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // 🔹 Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Define the login route
router.post("/login", login);

export default router;