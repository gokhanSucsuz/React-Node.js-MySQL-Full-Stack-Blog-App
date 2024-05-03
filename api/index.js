import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

const app = express();

app.use(express.json());

const corsOptions = {
	origin: [
		"https://react-node-js-my-sql-full-stack-blog-app.vercel.app/",
		"http://localhost:3000",
	],
	methods: "GET,PUT,POST,DELETE,OPTIONS",
	credentials: true,
	optionsSuccessStatus: 200,
};

app.options("*", cors());
app.use(cors(corsOptions));

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
