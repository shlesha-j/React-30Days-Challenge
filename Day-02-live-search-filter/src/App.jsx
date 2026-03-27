import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const users = [
    { id: 1, name: "Alice Johnson", role: "Designer" },
    { id: 2, name: "Bob Smith", role: "Developer" },
    { id: 3, name: "Charlie Brown", role: "Manager" },
    { id: 4, name: "Diana Prince", role: "Developer" },
    { id: 5, name: "Ethan Hunt", role: "Designer" },
    { id: 6, name: "Fiona Green", role: "Tester" },
  ];

  const filteredUsers = users.filter((user) => {
    const search = input.toLowerCase();

    return (
      user.name.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search by name or role..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

   
      <p style={{ marginTop: "10px" }}>
        Showing {filteredUsers.length} of {users.length} users
      </p>

     
      {filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id} style={{ display: "flex", gap: "10px" }}>
              <p>{user.id}</p>
              <p>
                {user.name} - <strong>{user.role}</strong>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default App;