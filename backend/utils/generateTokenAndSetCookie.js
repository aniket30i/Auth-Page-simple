import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  }); // 7 day

  res.cookie("token", token, {
    httpOnly: true, // XSS attack protection
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // CSRF attack protection
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
