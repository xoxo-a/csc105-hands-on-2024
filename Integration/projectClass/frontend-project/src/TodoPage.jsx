import { useState, useEffect } from "react";
import { getTodoAPI } from "./api/getTodo";
import { craeteTodoAPI } from "./api/createTodo";
import { editTodoAPI } from "./api/editTodo";
import { deleteTodo } from "./api/deleteTodo";

export default function TodoPage() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [editingIdx, setEditingIdx] = useState(null);
  const [editingText, setEditingText] = useState("");

  async function handleFetchTodoData() {
    const resp = await getTodoAPI();
    console.log(resp);
    if (resp.data.length > 0) {
      setList(resp.data);
    }
    console.log(list);
  }

  const add = async () => {
    if (!name.trim()) return;
    const resp = await craeteTodoAPI(name);
    if (!resp.success) {
      alert(resp.msg);
    }
    handleFetchTodoData();
    setName("");
  };

  const toggle = (idx) => {
    const items = [...list];
    items[idx].success = !items[idx].success;
    setList(items);
  };

  const remove = async (id) => {
    await deleteTodo(id);
    await handleFetchTodoData();
  };

  const startEdit = (idx) => {
    setEditingIdx(idx);
    setEditingText(list[idx].name);
  };

  const saveEdit = async (id, idx) => {
    await editTodoAPI(id, editingText);
    await handleFetchTodoData();
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="min-h-screen bg-pink-400 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Todo
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New task..."
            className="flex-1 border border-black text-gray-400 rounded-md px-4 py-2"
          />
          <button
            onClick={add}
            className="bg-pink-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>

        <ul className="space-y-4 max-h-80 overflow-y-auto">
          {list.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between p-3 border rounded-md text-black"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.success}
                  onChange={() => toggle(idx)}
                />
                {editingIdx === idx ? (
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="border rounded-md text-black"
                  />
                ) : (
                  <span
                    className={
                      item.success ? "line-through text-gray-400" : "text-black"
                    }
                  >
                    {item.name}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                {editingIdx === idx ? (
                  <button
                    onClick={() => saveEdit(item.id, idx)}
                    className="text-green-500 font-semibold"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(idx)}
                    className="text-yellow-500 font-semibold"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => remove(item.id)}
                  className="text-red-500 font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {list.length === 0 && (
          <p className="text-center text-gray-400 mt-8">Nothing here yet.</p>
        )}
      </div>
    </div>
  );
}
