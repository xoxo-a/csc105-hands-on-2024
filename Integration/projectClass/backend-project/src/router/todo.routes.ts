import { Hono } from "hono";
import * as todoController from "../controller/todo.controller.ts"

const todoRouter = new Hono();

todoRouter.get("/test", (c) => c.text("Hello From Todo Router"));
todoRouter.get("/get", todoController.GetAllTodo);
todoRouter.post("/add",todoController.AddTodo);
todoRouter.patch("/edit", todoController.EditTodoName);
todoRouter.patch("/update", todoController.CompleteTodo);
todoRouter.delete("/delete", todoController.DeleteTodo);


export { todoRouter };
