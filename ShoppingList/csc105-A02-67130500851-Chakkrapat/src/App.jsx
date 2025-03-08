import { useState } from "react";

export default function ShoppingList() {
    const [items, setItems] = useState(["mango", "potato", "banana", "chicken"]);
    const [newItem, setNewItem] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const addItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem.trim()]);
            setNewItem("");
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditText(items[index]);
    };

    const saveEdit = (index) => {
        const updatedItems = [...items];
        updatedItems[index] = editText;
        setItems(updatedItems);
        setEditingIndex(null);
    };

    return (
        <div style={{border: "3px solid black", marginLeft: "600px", maxWidth: "400px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center" }}>Shopping List</h1>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input
                    style={{ flex: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    type="text"
                    placeholder="Add a new item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button style={{ backgroundColor: "green", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px", cursor: "pointer" }} onClick={addItem}>Add</button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", marginBottom: "5px", backgroundColor: "#f4f4f4", borderRadius: "4px" }}>
                        {editingIndex === index ? (
                            <input
                                style={{ padding: "4px", border: "1px solid #ccc", borderRadius: "4px", color: "black" }}
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onBlur={() => saveEdit(index)}
                                autoFocus
                            />
                        ) : (
                            <span style={{ color: "black", fontWeight: "bold" }}>{item}</span>
                        )}
                        <div>
                            <button style={{ backgroundColor: "#f1c40f", color: "black", padding: "4px 8px", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "5px" }} onClick={() => startEditing(index)}>Edit</button>
                            <button style={{ backgroundColor: "red", color: "white", padding: "4px 8px", border: "none", borderRadius: "4px", cursor: "pointer" }} onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
