import bcrypt from "bcryptjs";
import User from "../models/user.model";
export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 9000000
    ).toString();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });
    await user.save();

    //jwt

    generateTokenAndSetCookie(res, user._id);
    res.status(201).json({
      success: true,
      message: "user created successfully",
      user: {
        ...user._doc,
        password: null,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
////////////////////
/////////////////
///////////////////////
//////////////////
///////////////////////
////////////////////
/////////////////
//////////////////
//////////////

export const login = async (req, res) => {
  res.send("login route");
};

export const logout = async (req, res) => {
  res.send("logout route");
};
