import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListData from "./pages/ListData";
import FormAdd from "./pages/FormAdd";
import FormEdit from "./pages/FormEdit";

const route = createBrowserRouter([
  {
    path: "/",
    element: <ListData />,
  },
  {
    path: "/add",
    element: <FormAdd />,
  },
  {
    path: "/edit/:id",
    element: <FormEdit />,
  },
]);

function App() {
  return (
    <section className="bg-[#f7aac61f] h-screen flex justify-center">
      <RouterProvider router={route} />
    </section>
  );
}

export default App;
