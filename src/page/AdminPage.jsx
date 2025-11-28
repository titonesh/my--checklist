import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialUsers = [
  { id: 1, username: "user1", role: "RM", active: true },
  { id: 2, username: "user2", role: "Co-Creator", active: true },
  { id: 3, username: "user3", role: "Co-Checker", active: true },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(initialUsers);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("RM");
  const [message, setMessage] = useState("");

  const roles = ["RM", "Co-Creator", "Co-Checker", "Admin"];

  // --- CREATE USER ---
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!newUsername || !newPassword) {
      setMessage("Please provide username and password");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: newUsername,
      role: newRole,
      active: true,
    };

    setUsers([...users, newUser]);
    setNewUsername("");
    setNewPassword("");
    setNewRole("RM");
    setMessage(`User "${newUser.username}" created successfully`);
  };

  // --- DEACTIVATE USER ---
  const handleDeactivate = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, active: false } : u)));
    setMessage("User deactivated successfully");
  };

  // --- REASSIGN ROLE ---
  const handleReassign = (id, newRole) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
    setMessage("User role updated successfully");
  };

  // --- LOGOUT ---
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* CREATE USER */}
        <form
          onSubmit={handleCreateUser}
          className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter password"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Create
          </button>
        </form>

        {message && <p className="text-green-600 font-semibold mb-4">{message}</p>}

        {/* USER LIST */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-2 border">{user.username}</td>
                <td className="p-2 border">{user.role}</td>

                <td className="p-2 border">
                  {user.active ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Deactivated</span>
                  )}
                </td>

                <td className="p-2 border flex gap-2 items-center">

                  {/* DEACTIVATE BUTTON */}
                  <button
                    onClick={() => handleDeactivate(user.id)}
                    disabled={!user.active}
                    className={`px-3 py-1 rounded ${
                      user.active
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Deactivate
                  </button>

                  {/* REASSIGN ROLE DROPDOWN */}
                  <select
                    value={user.role}
                    onChange={(e) => handleReassign(user.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
