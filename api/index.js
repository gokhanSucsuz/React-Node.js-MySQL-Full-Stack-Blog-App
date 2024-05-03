import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "https://react-node-js-my-sql-full-stack-blog-app.vercel.app/",
		credentials: true,
	})
);
app.use(cookieParser());
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "../client/public/uploads");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

const upload = multer({ storage });

app.post("/api/uploads", upload.single("file"), function (req, res) {
	const file = req.file;
	res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8080, () => {
	console.log("Connected!");
});
