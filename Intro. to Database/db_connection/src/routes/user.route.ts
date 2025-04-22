import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getUser);
userRouter.get("/todos", userController.getAllTodo);
userRouter.patch("/", userController.editUserName);

export { userRouter };