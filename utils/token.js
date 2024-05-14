import jwt from "jsonwebtoken";
const getToken = (user, res) => {
  const token = jwt.sign({ payload: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRESIN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "developement" ? false : true,
  });
  return;
};

export default getToken;
