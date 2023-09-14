import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import v1_api from "./routes/v1/v1-router";
import cookieparser from "cookie-parser";

const app = express();


app.use(express.static(path.join(__dirname, "..", "public")));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(cookieparser());
  
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "..", "index.html"));
});

app.use(express.static("public"));

app.use("/v1", v1_api)
  
export default app;
