import { createBrowserRouter } from "react-router";
import Navbar from "@/components/user/layout/navbar";
import Home from "@/features/home";
const routes = [
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        path: "",
        children: [{ index: true, Component: Home }],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
