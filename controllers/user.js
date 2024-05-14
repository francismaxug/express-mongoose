import UserAdmin from "../models/user.js";
import appError from "../utils/appError.js";

import getToken from "../utils/token.js";
const adminLogin = async (req, res, next) => {
  const { adminID, password } = req.body;
  console.log(adminID, password);
  try {
    const user = await UserAdmin.findOne({ adminID });
    if (!user) {
      throw new appError("Invalid Credentials", 404);
    }
    const checkPassword = await user.comparePasswords(password);
    if (!checkPassword) {
      throw new appError("Invalid Credentials", 404);
    }
    getToken(user, res);
    res.status(200).json({
      status: "success",
      message: "Login Successful",
      isAdmin: user.isAdmin,
    });
    console.log(user);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.cookie("jwt", "", {
      expires: new Date(0),
    });
    res.status(200).json({
      status: "success",
      message: "Logout Successful",
    });
  } catch (error) {
    next(error);
  }
};

export { adminLogin, logout };
