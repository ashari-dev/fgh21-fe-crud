import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

function FormAdd() {
  const nav = useNavigate();
  const formix = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("Required !")
        .min(2, "Minimal 2 characters"),
      email: yup
        .string()
        .required("Required !")
        .email("Invalid email format !!"),
      password: yup
        .string()
        .required("Required !")
        .min(8, "Minimal 8 characters"),
    }),
  });

  async function addData(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:8888/users/", {
      username: username,
      email: email,
      password: password,
    });

    nav("/");
  }
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="text-2xl font-semibold">Form add new data</div>
      <Link to={"/"} className="w-full hover:text-blue-700">
        Back to list data
      </Link>
      <form onSubmit={addData} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">
            Username
          </label>
          {formix.errors.username && (
            <p className="text-red-600">{formix.errors.username}</p>
          )}

          <input
            type="text"
            name="username"
            id="username"
            placeholder="Input username"
            value={formix.values.username}
            onChange={formix.handleChange}
            className="border p-2 rounded-md w-[350px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          {formix.errors.email && (
            <p className="text-red-600">{formix.errors.email}</p>
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Input email"
            value={formix.values.email}
            onChange={formix.handleChange}
            className="border p-2 rounded-md w-[350px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          {formix.errors.password && (
            <p className="text-red-600">{formix.errors.password}</p>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Input password"
            value={formix.values.password}
            onChange={formix.handleChange}
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
