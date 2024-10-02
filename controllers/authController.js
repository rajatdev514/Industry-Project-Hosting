import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import contactSubmissionModel from "../models/contactSubmissionModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, answer } = req.body;

    // validation
    if (!name) {
      return res.send({
        message: "Name is required",
      });
    }
    if (!email) {
      return res.send({
        message: "Email is required",
      });
    }
    if (!password) {
      return res.send({
        message: "Password is required",
      });
    }
    if (!answer) {
      return res.send({
        message: "Answer is required",
      });
    }
    // Check if the password length is at least 8 characters
    if (password.length < 8) {
      return res.send({
        message: "Password should be at least 8 characters long",
      });
    }
    if (!phone) {
      return res.send({
        message: "Phone No is required",
      });
    }
    // Check if the phone number is exactly 10 digits long
    if (phone.length !== 10) {
      return res.send({
        message: "Phone number should be exactly 10 digits long",
      });
    }
    // check if the phone number contains only digits
    if (!/^\d{10}$/.test(phone)) {
      return res.send({
        message: "Phone number should contain only digits",
      });
    }

    // check user
    const existingUser = await userModel.findOne({ email });
    // check existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "USER Already Exists please login",
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);

    // save
    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// forgotPasswordController
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Emai is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await userModel.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// test controller
export const testController = (req, res) => {
  res.send("Protected route");
};

// Get all users
export const getUsersController = async (req, res) => {
  try {
    const users = await userModel.find(); // Fetch all users from MongoDB
    res.status(200).send({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching users",
      error,
    });
  }
};

// Controller to get all contact submissions
export const getContactSubmissionsController = async (req, res) => {
  try {
    const submissions = await contactSubmissionModel.find(); // Fetch submissions from MongoDB
    res.status(200).send({
      success: true,
      message: "Contact submissions fetched successfully",
      submissions,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching contact submissions",
      error,
    });
  }
};

// Contact form submission controller
export const submitContactFormController = async (req, res) => {
  try {
    const { name, email, phone, enquiry, location, message } = req.body;

    // Validation
    if (!name || !email || !phone || !enquiry.length || !location || !message) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to DB
    const contactSubmission = new contactSubmissionModel({
      name,
      email,
      phone,
      enquiry,
      location,
      message,
    });
    await contactSubmission.save();

    res.status(201).send({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).send({
      success: false,
      message: "Error submitting form",
    });
  }
};
