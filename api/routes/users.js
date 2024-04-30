import express from "express";
import { addUser } from "../controllers/user.js";

const router = express.Router();

router.get("/userTest", addUser);

export default router;
