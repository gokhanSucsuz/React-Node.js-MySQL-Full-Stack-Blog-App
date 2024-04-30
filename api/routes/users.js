import express from "express";

const routes = express.Router();

routes.get("/userTest", (req, res) => {
	res.json("UserTest works");
});

export default routes;
