import pkg from "mongoose";
const { Schema, model, models } = pkg;
import bcrypt from "bcryptjs";
const userAdminSchema = new Schema({
  adminID: {
    type: String,
    required: [true, "Please provide an admin ID"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
});

userAdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashs = await bcrypt.hash(this.password, salt);
    this.password = hashs;
    return;
  } catch (error) {
    console.log(error);
  }
});

//compaere passwords
userAdminSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const UserAdmin = models.UserAdmin || model("UserAdmin", userAdminSchema);
export default UserAdmin;
