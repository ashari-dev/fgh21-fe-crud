import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListData() {
  const endpoint = "http://localhost:8888";
  const [data, setData] = useState([]);
  const nav = useNavigate();
  function toAdd() {
    nav("/add");
  }
  function toEdit(id) {
    nav("/edit/" + id);
  }
  async function showData()  {
    const data = await axios.get(endpoint + "/users");
    setData(data.data.results);
  }
  useEffect(() => {
    showData();
  }, [])

  async function remove(id) {
    await axios.delete(endpoint + "/users/" + id);
    showData()
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <button
        onClick={toAdd}
        className="bg-blue-500 py-2 w-full rounded text-white"
      >
        Add new data
      </button>
      <table>
        <thead className="">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border p-2 ">{item.id}</td>
                <td className="border p-2 ">{item.name}</td>
                <td className="border p-2 ">{item.email}</td>
                <td className="border p-2 ">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toEdit(item.id)}
                      className="bg-blue-500 px-2 rounded text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => remove(item.id)}
                      className="bg-red-500 px-2 rounded text-white"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListData;
