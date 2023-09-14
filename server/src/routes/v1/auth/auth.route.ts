import express from "express";
import { getCallback, getLogin, getRefreshAccessToken } from "./auth.controller";

const authRouter = express.Router();

authRouter.get("/login", getLogin);
authRouter.get("/callback", getCallback);
authRouter.get("/refresh_token", getRefreshAccessToken)

export default authRouter;