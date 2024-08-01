import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function FormAdd() {
  const nav = useNavigate();
  async function addData(e) {
    e.preventDefault();
    const name = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:8888/users", {
      name,
      email,
      password,
    });

    nav("/");
  }
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="text-2xl font-semibold">Form add new data</div>
      <Link to={"/"} className="w-full hover:text-blue-700">
        {" "}
        Back to list data
      </Link>
      <form onSubmit={addData} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Input fullname"
            className="border p-2 rounded-md w-[350px] outline-none"
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
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-blue-500 text-white p-2 rounded-md w-[350px]">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAdd;
