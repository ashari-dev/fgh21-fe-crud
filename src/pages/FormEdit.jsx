import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function FormEdit() {
  const [data, setData] = useState({});
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const id = useParams();

  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:8888/users/" + id.id);
      setData(data.data.results);
      setNewEmail(data.data.results.email);
      setNewUsername(data.data.results.username);
      setNewPassword(data.data.results.password);
    })();
  }, []);
  async function editData(e) {
    e.preventDefault();
    await axios.patch("http://localhost:8888/users/" + id.id, {
      username: newUsername,
      email: newEmail,
      password: newPassword,
    });
    nav("/");
  }
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="text-2xl font-semibold">Form edit data</div>
      <Link to={"/"} className="w-full hover:text-blue-700">
        Back to list data
      </Link>
      <form onSubmit={editData} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Input Username"
            className="border p-2 rounded-md w-[350px] outline-none"
            defaultValue={data.username}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Input email"
            className="border p-2 rounded-md w-[350px] outline-none"
            defaultValue={data.email}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Input password"
            className="border p-2 rounded-md w-[350px] outline-none"
            defaultValue={data.password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-blue-500 text-white p-2 rounded-md w-[350px]">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEdit;
