import express from "express";
import { router } from "./routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", router());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
