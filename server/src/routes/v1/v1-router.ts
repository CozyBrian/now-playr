import express from "express";
import authRouter from "./auth/auth.route";

const v1_api = express.Router();

v1_api.use('/auth', authRouter);

export default v1_api;