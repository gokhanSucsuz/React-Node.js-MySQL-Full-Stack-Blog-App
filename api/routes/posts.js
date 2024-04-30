import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.json("This is post");
});

router.get("/test", (req, res) => {
	res.json("This is test post");
});

export default router;
