import express from "express";
import {
  forgotPasswordController,
  getContactSubmissionsController,
  getUsersController,
  loginController,
  registerController,
  submitContactFormController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// Register || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// forgot password
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// get pdf
router.get("/download-syllabus", requireSignIn, (req, res) => {
  const pdfPath = path.join(__dirname, "../public/Rajat_Mahajan.pdf");
  res.download(pdfPath, "Syllabus.pdf", (err) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: "Error in downloading syllabus",
      });
    }
  });
});

// protected user routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin routes
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Route to fetch all users
router.get("/users", requireSignIn, isAdmin, getUsersController);

// contact page details
router.get(
  "/contact-submissions",
  requireSignIn,
  isAdmin,
  getContactSubmissionsController
);

// Contact form submission route
router.post("/contact", submitContactFormController);

export default router;
