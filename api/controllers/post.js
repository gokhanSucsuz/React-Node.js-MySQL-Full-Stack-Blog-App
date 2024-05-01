import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
	const q = req.query.cat
		? "select * from posts where cat = ?"
		: "select * from posts";
	db.query(q, [req.query.cat], (err, data) => {
		if (err) return res.status(500).send(err);
		return res.status(200).json(data);
	});
};

export const getPost = (req, res) => {
	const q =
		"select `username`,`title`,`desc`,u.img,p.img as postImg,`cat`,`date` from users u join posts p on u.id = p.uid where p.id = ?";
	db.query(q, [req.params.id], (err, data) => {
		console.log(req.params.id);
		if (err) return res.status(500).send(err);
		console.log(data);
		return res.status(200).json(data);
	});
};
export const addPost = (req, res) => {
	res.json("from controller");
};
export const deletePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");
	});

	const q = "delete from posts where `id` = ?and `uid` = ?";
	db.query(q, [req.params.id, userInfo.id], (err, data) => {
		if (err) return res.status(403).json("You can delete only your post!");
		return res.status(200).json("Post has been deleted!");
	});
};
export const updatePost = (req, res) => {
	res.json("from controller");
};
