import express from "express";
import {
  loginController,
  registerController,
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

export default router;
