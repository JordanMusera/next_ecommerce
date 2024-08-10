require("../../lib/database");
import { NextResponse } from "next/server";
import User from "../../models/user";
import bcrypt from "bcrypt";


export async function POST(request) {
  const { task, name, password } = await request.json();

  //signup
  if (task === "create_user") {
    const hashedPassword = await hashPassword(password);
    const user = new User({ name: name, password: hashedPassword });
    await user.save();
    return NextResponse.json({ name: name, password: hashedPassword });
  } 
  //login
  else if (task === "login_user") {
    return await loginUser(name, password);
  }
}

//login function
const loginUser = async (name, password) => {
  const user = await User.findOne({ name });
  try {
    if (user) {
      const userPassword = user.password;
      const passwordValid = await validatePassword(password, userPassword);
      if (passwordValid) {
        return NextResponse.json({
          success: true,
          message: "You signed in successfully",
        });
      }
      return NextResponse.json({
        success: false,
        message: "Wrong credentials",
      });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "An error occurred" });
  }
};

//////FUNCTIONS///////
//1.hashing password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

//2.validating password
const validatePassword = (password, userPassword) => {
  const isValid = bcrypt.compare(password, userPassword);
  return isValid;
};
