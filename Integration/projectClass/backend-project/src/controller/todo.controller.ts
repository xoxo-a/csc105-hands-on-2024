import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const GetAllTodo = async (c: Context) => {
  try {
    const data = await todoModel.GetTodo();
    return c.json({
      success: true,
        data: data,
        msg:"Trueee",
    });

  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

type addTodoBody = {
  name: string;
};

const AddTodo = async (c: Context) => {
  try {
    const body = await c.req.json<addTodoBody>();
    if (!body.name) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }
    const data = await todoModel.AddTodo(body.name);
    return c.json({
      success: true,
        data: data,
        msg:"Trueee",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

type editTodoBody = {
  name: string;
};

const EditTodoName = async (c: Context) => {
  try {
    const param = c.req.query("id");
    const body = await c.req.json<editTodoBody>();
    if (!body.name || !param) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }
    const data = await todoModel.EditTodo(parseInt(param), body.name);
    return c.json(data, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.SuccessTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.DeleteTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetAllTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
